import React from "react";

import { ModalProps, StatusBar } from "react-native";
import { Background } from "../Background";

import { Container, Overlay, Content, Bar } from "./styles";

interface Props extends ModalProps {
  children: React.ReactNode;
}

export function ModalView({ children, ...rest }: Props) {
  return (
    <Container transparent animationType="slide" {...rest}>
      <Overlay>
        <Content>
          <Background>
            <Bar />
            {children}
          </Background>
        </Content>
      </Overlay>
    </Container>
  );
}
