import React from "react";

import { Avatar } from "../../components/Avatar";

import {
  Container,
  InforContainer,
  Username,
  StatusContainer,
  StatusIndicator,
  StatusText,
} from "./styles";

interface ProfileData {
  id: string;
  username: string;
  status: string;
  avatarURL: string;
}

interface Props {
  data: ProfileData;
}

export function ProfileCards({ data }: Props) {
  return (
    <Container>
      <Avatar avatarURL={data.avatarURL} />
      <InforContainer>
        <Username>{data.username}</Username>
        <StatusContainer>
          <StatusIndicator status={data.status === "Disponível"} />
          <StatusText>{data.status}</StatusText>
        </StatusContainer>
      </InforContainer>
    </Container>
  );
}
