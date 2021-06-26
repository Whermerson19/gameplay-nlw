import React, { useCallback } from "react";
import { Alert, ActivityIndicator } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";

import IllustrationPNG from "../../assets/illustration.png";

import { Container, ImageBG, Content, Title, Subtitle } from "./styles";

export function SignIn() {
  const { signIn, loading } = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (err) {
      Alert.alert(err);
    }
  }, []);

  return (
    <Container>
      <ImageBG source={IllustrationPNG} />

      <Content>
        <Title>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Subtitle>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            activeOpacity={0.7}
            title="Entrar com Discord"
            onPress={handleSignIn}
            type="signIn"
          />
        )}
      </Content>
    </Container>
  );
}
