import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  width: 100%;

  padding: ${RFValue(30)}px ${RFValue(24)}px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
  color: ${(props) => props.theme.colors.heading};
`;

export const Terms = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${(props) => props.theme.fonts.inter_regular};
  color: ${(props) => props.theme.colors.highlight};
`;

export const Content = styled.View`
  flex: 1;
`;
