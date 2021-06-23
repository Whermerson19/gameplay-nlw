import React from "react";

import { Container, AvatarImage } from "./styles";

interface Props {
  avatarURL: string;
}

export function Avatar({ avatarURL }: Props) {
  return (
    <Container>
      <AvatarImage source={{ uri: avatarURL }} />
    </Container>
  );
}
