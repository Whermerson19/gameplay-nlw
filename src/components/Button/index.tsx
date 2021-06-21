import React from "react";

import { TouchableOpacityProps } from "react-native";

import DiscordPNG from "../../assets/discord.png";

import { Container, Icon, Image, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  hasIcon?: boolean;
}

export function Button({ title, hasIcon = true, ...rest }: Props) {
  return (
    <Container {...rest}>
      {hasIcon && (
        <Icon>
          <Image source={DiscordPNG} />
        </Icon>
      )}
      <Title>{title}</Title>
    </Container>
  );
}
