import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;
