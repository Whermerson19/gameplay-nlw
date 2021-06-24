import styled from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo } from "@expo/vector-icons";

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const FormContent = styled.ScrollView`
  flex: 1;
`;

export const FormInputs = styled.View`
  flex: 1;

  padding: ${RFValue(52)}px ${RFValue(24)}px;
  padding-bottom: 0;
`;

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
`;

export const Category = styled.View``;

export const SelectServer = styled.View`
  width: 100%;
  height: ${RFValue(68)}px;

  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary50};

  border-radius: 8px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding-right: ${RFValue(30)}px;
`;

export const EmptyGuildIcon = styled.View`
  width: ${RFValue(64)}px;
  height: 100%;

  background-color: ${(props) => props.theme.colors.secondary60};
  border-radius: 8px;
`;

export const SelectButtonContainer = styled(BorderlessButton)``;

export const ArrowRight = styled(Entypo)`
  color: ${(props) => props.theme.colors.heading};
`;

export const SchedulesContainer = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: ${RFValue(30)}px 0;
`;

export const NumbersInputsContainer = styled.View`
  width: 50%;

  margin-top: ${RFValue(8)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateContainer = styled.View``;

export const HoursContainer = styled.View``;

export const DescriptionContainer = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const DescriptionHeader = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding-bottom: ${RFValue(5)}px;
`;

export const MaxLengthText = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${(props) => props.theme.colors.highlight};
  font-family: ${(props) => props.theme.fonts.inter_regular};
`;

export const Footer = styled.View`
  width: 100%;

  padding: ${RFValue(24)}px;
`;
