import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: 100%;
  min-height: ${RFValue(48)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 8px;
`;

export const Icon = styled.View`
  padding: ${RFValue(16)}px;

  border-right-width: 1px;
  border-color: ${(props) => props.theme.colors.line};
`;

export const Image = styled.Image``;

export const Title = styled.Text`
  flex: 1;

  font-size: ${RFValue(15)}px;
  font-weight: 500;

  text-align: center;

  font-family: ${(props) => props.theme.fonts.inter_medium};

  color: ${(props) => props.theme.colors.heading};
`;
