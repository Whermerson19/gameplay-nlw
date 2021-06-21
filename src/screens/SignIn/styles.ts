import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.background};
`;

export const ImageBG = styled.Image`
  width: 100%;
  height: ${RFValue(304)}px;
`;

export const Content = styled.View`
  width: 100%;

  padding: 0 ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.heading};

  text-align: center;

  margin-top: -${RFValue(60)}px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${(props) => props.theme.colors.heading};

  text-align: center;

  margin: ${RFValue(16)}px 0 ${RFValue(55)}px 0;
`;
