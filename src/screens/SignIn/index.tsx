import React from "react";
import { Button } from "../../components/Button";

import IllustrationPNG from "../../assets/illustration.png";

import { Container, ImageBG, Content, Title, Subtitle } from "./styles";

export function SignIn() {
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

        <Button activeOpacity={0.7} title="Entrar com Discord" />
      </Content>
    </Container>
  );
}
