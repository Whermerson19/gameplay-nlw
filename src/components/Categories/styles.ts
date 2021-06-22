import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

interface FilterSquadProps {
  checked: boolean;
}

interface GradientProps {
  selected: boolean;
  isScheduling: boolean;
}

export const GradientContainer = styled(LinearGradient)<GradientProps>`
  width: ${RFValue(104)}px;
  height: ${RFValue(120)}px;

  border-radius: 8px;

  margin-right: 8px;

  align-items: center;
  justify-content: center;

  opacity: ${(props) => (!props.isScheduling ? 1 : props.selected ? 1 : 0.4)};
`;

export const Container = styled(RectButton)`
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(20)}px 0;

  position: relative;
`;

export const FilterSquad = styled.View<FilterSquadProps>`
  width: 8px;
  height: 8px;

  border-radius: 3px;

  border-width: ${(props) => (props.checked ? 0 : 2)}px;
  border-color: ${(props) =>
    props.checked
      ? props.theme.colors.primary
      : props.theme.colors.secondary30};

  position: absolute;
  top: 8px;
  right: 8px;

  background-color: ${(props) =>
    props.checked
      ? props.theme.colors.primary
      : props.theme.colors.secondary100};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
  color: ${(props) => props.theme.colors.heading};
`;
