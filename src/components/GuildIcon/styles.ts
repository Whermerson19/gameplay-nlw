import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  margin-right: ${RFValue(24)}px;
`;
