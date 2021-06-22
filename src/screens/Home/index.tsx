import React, { useState, useCallback } from "react";
import { ScrollView } from "react-native";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
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

export function Home() {
  const [categorySelectedId, setCategorySelectedId] = useState("");

  const handleCategoryCardSelect = useCallback(
    (id: string) => {
      categorySelectedId === id
        ? setCategorySelectedId("")
        : setCategorySelectedId(id);
    },
    [categorySelectedId]
  );

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
            <Subtitle>Hoje é dia de vitória.</Subtitle>
          </UserInfo>
        </UserInfoContainer>
        <ButtonContainer>
          <Button activeOpacity={0.7} title="+" type="plus" />
        </ButtonContainer>
      </Header>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 24, paddingRight: 16 }}
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
    </Container>
  );
}
