import React from "react";

import { ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";

import { Container, Overlay, Content, Bar } from "./styles";

interface Props extends ModalProps {
  children: React.ReactNode;
  onClose(): void;
}

export function ModalView({ children, onClose, ...rest }: Props) {
  return (
    <Container statusBarTranslucent transparent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay>
          <Content>
            <Background>
              <Bar />
              {children}
            </Background>
          </Content>
        </Overlay>
      </TouchableWithoutFeedback>
    </Container>
  );
}
