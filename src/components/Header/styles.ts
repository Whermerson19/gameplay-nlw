import styled from "styled-components/native";

import { Feather, Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const LinearContainer = styled(LinearGradient)`
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(24)}px;
  padding-top: ${RFValue(56)}px;
`;

export const BackIcon = styled(Feather)`
  color: ${(props) => props.theme.colors.heading};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
`;

export const SharedIcon = styled(Entypo)`
  color: ${(props) => props.theme.colors.primary};
`;
