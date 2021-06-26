import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  flex-direction: row;

  margin-top: ${RFValue(25)}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  height: ${RFValue(64)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary40};

  padding: 8px 0;
`;

export const Infos = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${(props) => props.theme.colors.highlight};
  font-family: ${(props) => props.theme.fonts.inter_regular};
`;

export const ArrowRight = styled(Entypo)`
  color: ${(props) => props.theme.colors.heading};
`;
