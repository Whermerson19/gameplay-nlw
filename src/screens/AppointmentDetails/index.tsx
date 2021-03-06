import React from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { CardsContainer } from "../../components/CardsContainer";
import { ProfileCards } from "../../components/ProfileCards";
import { Button } from "../../components/Button";

import Banner from "../../assets/banner.png";

import {
  Container,
  BackgroundContainer,
  InfoContainer,
  Title,
  Subtitle,
  Footer,
} from "./styles";

const profiles = [
  {
    id: "1",
    avatarURL: "https://github.com/Whermerson19.png",
    username: "Whermerson Cavalcante",
    status: "Disponível",
  },
  {
    id: "2",
    avatarURL: "https://github.com/Whermerson19.png",
    username: "Whermerson Cavalcante",
    status: "Ocupado",
  },
  {
    id: "3",
    avatarURL: "https://github.com/Whermerson19.png",
    username: "Whermerson Cavalcante",
    status: "Disponível",
  },
];

export function AppointmentDetails() {
  return (
    <Container>
      <Header title="Detalhes" hasShared />
      <BackgroundContainer source={Banner}>
        <InfoContainer>
          <Title>Lendários</Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger{"\n"}
            sem perder uma partida da md10
          </Subtitle>
        </InfoContainer>
      </BackgroundContainer>
      <CardsContainer title="Jogadores" terms={3}>
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProfileCards data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </CardsContainer>
      <Footer>
        <Button title="Entrar na partida" type="signIn" />
      </Footer>
    </Container>
  );
}
