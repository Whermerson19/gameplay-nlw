import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { ScrollView, View, FlatList } from "react-native";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Cards } from "../../components/Cards";
import { CardsContainer } from "../../components/CardsContainer";
import { Categories } from "../../components/Categories";

import { categories } from "../../utils/categories";

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

const cards = [
  {
    id: "1",
    guild: {
      id: "1",
      title: "Lendários",
      date: "18/06 às 21:00h",
      owner: true,
      icon: null,
      category: "Ranqueada",
    },
  },
  {
    id: "2",
    guild: {
      id: "2",
      title: "Yeah, Boy",
      date: "23/06 às 19:00h",
      owner: false,
      icon: null,
      category: "Diversão",
    },
  },
  {
    id: "3",
    guild: {
      id: "3",
      title: "Rumo ao topo",
      date: "18/06 às 21:00h",
      owner: false,
      icon: null,
      category: "1x1",
    },
  },
  {
    id: "4",
    guild: {
      id: "4",
      title: "Rumo ao topo",
      date: "18/06 às 21:00h",
      owner: false,
      icon: null,
      category: "1x1",
    },
  },
  {
    id: "5",
    guild: {
      id: "5",
      title: "Rumo ao topo",
      date: "18/06 às 21:00h",
      owner: false,
      icon: null,
      category: "1x1",
    },
  },
];

export function Home() {
  const [categorySelectedId, setCategorySelectedId] = useState("");

  const navigation = useNavigation();

  const handleCategoryCardSelect = useCallback(
    (id: string) => {
      categorySelectedId === id
        ? setCategorySelectedId("")
        : setCategorySelectedId(id);
    },
    [categorySelectedId]
  );

  const handleAppointmentCreate = useCallback(() => {
    navigation.navigate("AppointmentCreate");
  }, [navigation]);

  return (
    <Container>
      <Header>
        <UserInfoContainer>
          <Avatar avatarURL="https://github.com/Whermerson19.png" />
          <UserInfo>
            <TitleContainer>
              <Title>Olá,</Title>
              <Username>Whermerson</Username>
            </TitleContainer>
            <Subtitle>Hoje é dia de vitória.</Subtitle>
          </UserInfo>
        </UserInfoContainer>
        <ButtonContainer>
          <Button
            activeOpacity={0.7}
            title="+"
            type="plus"
            onPress={handleAppointmentCreate}
          />
        </ButtonContainer>
      </Header>

      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 24,
            paddingRight: 16,
          }}
        >
          {categories.map((category) => (
            <Categories
              key={category.id}
              icon={category.icon}
              title={category.title}
              selected={categorySelectedId === category.id}
              onPress={() => handleCategoryCardSelect(category.id)}
            />
          ))}
        </ScrollView>
      </View>

      <CardsContainer title="Partidas agendadas" terms={6}>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Cards
              type="scheduled"
              data={item}
              onPress={() => navigation.navigate("AppointmentDetails")}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </CardsContainer>
    </Container>
  );
}
