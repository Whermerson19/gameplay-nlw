import React, { createContext, useContext, useState, useCallback } from "react";

import * as AuthSession from "expo-auth-session";

import {
  SCOPE,
  CDN_IMAGE,
  CLIENT_ID,
  RESPONSE_TYPE,
  REDIRECT_URI,
} from "../config";
import { api } from "../services/api";

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

interface AuthContextData {
  user: User;
  signIn(): Promise<void>;
  loading: boolean;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Invalid context");

  return context;
}

export function AuthProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({} as User);

  const signIn = useCallback(async () => {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}%20email%20connections%20guilds`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get("/users/@me");

        const firstName = userInfo.data.username.split(" ")[0];

        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token,
        });

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      throw new Error("Não foi possível concluir a autenticação.");
    }
  }, [api, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE]);

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
