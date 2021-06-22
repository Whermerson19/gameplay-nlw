import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import IllustrationPNG from "../../assets/illustration.png";

import { Container, ImageBG, Content, Title, Subtitle } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

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

        <Button
          activeOpacity={0.7}
          title="Entrar com Discord"
          onPress={handleSignIn}
          type="signIn"
        />
      </Content>
    </Container>
  );
}
