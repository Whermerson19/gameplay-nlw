import React from "react";

import { Container, Header, Title, Terms, Content } from "./styles";

interface Props {
  title: string;
  terms: number;
  children: React.ReactNode;
}

export function CardsContainer({ title, terms, children }: Props) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Terms>total {terms}</Terms>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
}
