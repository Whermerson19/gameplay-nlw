import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { BorderlessButton } from "react-native-gesture-handler";

import {
  LinearContainer,
  Container,
  BackIcon,
  Title,
  SharedIcon,
} from "./styles";

interface Props {
  title: string;
  hasShared?: boolean;
}

export function Header({ title, hasShared = false }: Props) {
  const { colors } = useTheme();

  const navigation = useNavigation();

  return (
    <LinearContainer colors={[colors.secondary40, colors.secondary80]}>
      <Container>
        <BorderlessButton onPress={() => navigation.goBack()}>
          <BackIcon name="arrow-left" size={24} />
        </BorderlessButton>
        <Title>{title}</Title>
        {hasShared && (
          <BorderlessButton>
            <SharedIcon name="share" size={24} />
          </BorderlessButton>
        )}
      </Container>
    </LinearContainer>
  );
}
