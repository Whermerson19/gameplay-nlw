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

  data: DataProps;
}

export function Cards({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <IconContainer
        resizeMode="cover"
        source={{
          uri: "data:image/png;base64,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",
        }}
      />
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
