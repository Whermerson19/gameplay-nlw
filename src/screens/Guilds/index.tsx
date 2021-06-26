import React from "react";

import { FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";

const guilds = [
  {
    id: "1",
    title: "Rumo ao topo",
    admin: true,
    image: null,
  },
  {
    id: "2",
    title: "Bora queimar tudo",
    admin: false,
    image:
      "https://i.pinimg.com/originals/dd/89/c3/dd89c3f7743c253763c1d2ed8b552cc8.jpg",
  },
  {
    id: "3",
    title: "Construtores",
    admin: true,
    image: null,
  },
];

interface Props {
  handleGuildSelect(guild: GuildProps): void;
}

export function Guilds({ handleGuildSelect }: Props) {
  return (
    <FlatList
      data={guilds}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Guild
          data={item}
          activeOpacity={0.7}
          onPress={() => handleGuildSelect(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 24,
      }}
    />
  );
}
