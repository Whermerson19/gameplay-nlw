import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  IconContainer,
  InfoContainer,
  FirstHalf,
  LastHalf,
  Title,
  Date,
  DateText,
  Category,
  Permission,
  PermissionText,
  PermissionIcon,
} from "./styles";
import { useTheme } from "styled-components";
import { GuildIcon } from "../GuildIcon";

interface GuildProps {
  id: string;
  title: string;
  date: string;
  owner: boolean;
  icon: null;
  category: string;
}

interface DataProps {
  guild: GuildProps;
}

interface Props extends RectButtonProps {
  type: "profile" | "scheduled" | "scheduling";
  username?: string;
  data: DataProps;
}

export function Cards({ username, type, data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <GuildIcon image="https://i.pinimg.com/originals/dd/89/c3/dd89c3f7743c253763c1d2ed8b552cc8.jpg" />
      <InfoContainer>
        <FirstHalf>
          <Title>{data.guild.title}</Title>
          <Date>
            <Feather name="calendar" color={theme.colors.primary} />
            <DateText>{data.guild.date}</DateText>
          </Date>
        </FirstHalf>
        <LastHalf>
          <Category>{data.guild.category}</Category>
          <Permission>
            <PermissionIcon owner={data.guild.owner} name="user" />
            <PermissionText owner={data.guild.owner}>
              {data.guild.owner ? "Anfitrião" : "Visitante"}
            </PermissionText>
          </Permission>
        </LastHalf>
      </InfoContainer>
    </Container>
  );
}
