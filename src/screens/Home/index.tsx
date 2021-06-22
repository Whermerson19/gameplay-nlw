import React from "react";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  UserInfoContainer,
  UserInfo,
  TitleContainer,
  Title,
  Username,
  Subtitle,
  ButtonContainer,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <UserInfoContainer>
          <Avatar />
          <UserInfo>
            <TitleContainer>
              <Title>Olá,</Title>
              <Username>Whermerson</Username>
            </TitleContainer>
            <Subtitle>Hoje é dia de vitória</Subtitle>
          </UserInfo>
        </UserInfoContainer>
        <ButtonContainer>
          <Button activeOpacity={0.7} title="+" type="plus" />
        </ButtonContainer>
      </Header>
    </Container>
  );
}
