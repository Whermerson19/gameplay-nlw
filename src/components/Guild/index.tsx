import React from "react";
import { TouchableOpacityProps } from "react-native";

import { GuildIcon } from "../GuildIcon";

import {
  Container,
  InfoContainer,
  Infos,
  Title,
  Subtitle,
  ArrowRight,
} from "./styles";

export interface GuildProps {
  id: string;
  title: string;
  admin: boolean;
  image: string | null;
}

interface Props extends TouchableOpacityProps {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <GuildIcon image="https://i.pinimg.com/originals/dd/89/c3/dd89c3f7743c253763c1d2ed8b552cc8.jpg" />

      <InfoContainer>
        <Infos>
          <Title>{data.title}</Title>
          <Subtitle>{data.admin ? "Administrador" : "Convidado"}</Subtitle>
        </Infos>
        <ArrowRight name="chevron-right" size={12} />
      </InfoContainer>
    </Container>
  );
}
