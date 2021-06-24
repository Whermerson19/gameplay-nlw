import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = TextInputProps;

export function SmallInput({ ...rest }: Props) {
  return <Container {...rest} keyboardType="numeric" maxLength={2} />;
}
