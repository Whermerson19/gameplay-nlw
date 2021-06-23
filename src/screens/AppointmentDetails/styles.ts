import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundContainer = styled.ImageBackground`
  width: 100%;
  height: ${RFValue(234)}px;
`;

export const InfoContainer = styled.View`
  height: 100%;

  justify-content: flex-end;
  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
  color: ${(props) => props.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${(props) => props.theme.fonts.inter_regular};
  color: ${(props) => props.theme.colors.highlight};
`;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
  width: 100%;
`;
