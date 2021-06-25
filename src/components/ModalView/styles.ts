import styled from "styled-components/native";

import { Modal } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(Modal)`
  /* flex: 1; */
`;

export const Overlay = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.overlay};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(80)}px;
`;

export const Bar = styled.View`
  width: ${RFValue(40)}px;
  height: 2px;

  border-radius: 2px;

  background-color: ${(props) => props.theme.colors.secondary30};

  align-self: center;
  margin-top: ${RFValue(15)}px;
`;
