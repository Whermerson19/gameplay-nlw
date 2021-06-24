import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  height: ${RFValue(130)}px;

  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.secondary60};
  border: 1px;
  border-color: ${(props) => props.theme.colors.secondary50};

  color: ${(props) => props.theme.colors.heading};
  font-size: ${RFValue(13)}px;
  font-family: ${(props) => props.theme.fonts.inter_regular};
`;
