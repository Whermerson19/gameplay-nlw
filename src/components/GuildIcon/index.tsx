import React from "react";

import { Container } from "./styles";

interface Props {
  image: string;
}

export function GuildIcon({ image }: Props) {
  return (
    <Container
      resizeMode="cover"
      source={{
        uri: image,
      }}
    />
  );
}
