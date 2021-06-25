import React, { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import {
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Button } from "../../components/Button";
import { Categories } from "../../components/Categories";
import { GuildProps } from "../../components/Guild";
import { Header } from "../../components/Header";
import { ModalView } from "../../components/ModalView";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Guilds } from "../Guilds";
import { GuildIcon } from "../../components/GuildIcon";

import { categories } from "../../utils/categories";

import {
  Container,
  FormContent,
  FormInputs,
  Category,
  Label,
  SelectServer,
  EmptyGuildIcon,
  SelectButtonContainer,
  ArrowRight,
  SchedulesContainer,
  NumbersInputsContainer,
  DateContainer,
  HoursContainer,
  DescriptionContainer,
  DescriptionHeader,
  MaxLengthText,
  Footer,
} from "./styles";

export function AppointmentCreate() {
  const [categorySelectedId, setCategorySelectedId] = useState("");

  const [modalVisibility, setModalVisibility] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleCategoryCardSelect = useCallback(
    (id: string) => {
      categorySelectedId === id
        ? setCategorySelectedId("")
        : setCategorySelectedId(id);
    },
    [categorySelectedId]
  );

  const handleOpenModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const handleGuildSelect = useCallback((guild: GuildProps) => {
    console.log("click");
    setGuild(guild);
    setModalVisibility(false);
  }, []);

  useEffect(() => {
    console.log(guild);
  }, [guild]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Header title="Agendar partida" />
          <FormContent>
            <Category>
              <View
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 15,
                }}
              >
                <Label>Categoria</Label>
              </View>
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
                    isScheduling
                  />
                ))}
              </ScrollView>
            </Category>

            <FormInputs>
              <SelectServer>
                {guild.image ? (
                  <GuildIcon image={guild.image} />
                ) : (
                  <EmptyGuildIcon />
                )}
                <Label>
                  {guild.title ? guild.title : "Selecione um servidor"}
                </Label>
                <SelectButtonContainer>
                  <ArrowRight
                    name="chevron-right"
                    size={18}
                    onPress={handleOpenModal}
                  />
                </SelectButtonContainer>
              </SelectServer>

              <SchedulesContainer>
                <DateContainer>
                  <Label>Dia e mês</Label>
                  <NumbersInputsContainer>
                    <SmallInput />
                    <Label>/</Label>
                    <SmallInput />
                  </NumbersInputsContainer>
                </DateContainer>

                <HoursContainer>
                  <Label>Hora e minuto</Label>
                  <NumbersInputsContainer>
                    <SmallInput />
                    <Label>:</Label>
                    <SmallInput />
                  </NumbersInputsContainer>
                </HoursContainer>
              </SchedulesContainer>

              <DescriptionContainer>
                <DescriptionHeader>
                  <Label>Descrição</Label>

                  <MaxLengthText>Max 100 caracteres</MaxLengthText>
                </DescriptionHeader>

                <TextArea
                  multiline={true}
                  numberOfLines={5}
                  maxLength={100}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{
                    textAlignVertical: "top",
                    padding: 16,
                  }}
                />
              </DescriptionContainer>
            </FormInputs>
            <Footer>
              <Button title="Agendar" />
            </Footer>
          </FormContent>
        </Container>

        <ModalView visible={modalVisibility}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
