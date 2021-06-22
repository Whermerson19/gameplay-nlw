import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { RectButtonProps } from "react-native-gesture-handler";

import { Entypo } from "@expo/vector-icons";

import DiscordPNG from "../../assets/discord.png";

import { Container, Icon, Image, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  type?: "signIn" | "normal" | "plus";
}

export function Button({ title, type = "normal", ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      {type === "signIn" && (
        <Icon>
          <Image source={DiscordPNG} />
        </Icon>
      )}
      {(type === "normal" || type === "signIn") && <Title>{title}</Title>}
      {type === "plus" && (
        <Entypo name="plus" color={colors.heading} size={24} />
      )}
    </Container>
  );
}
