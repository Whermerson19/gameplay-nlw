import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface StatusIndicatorProps {
  status: boolean;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(12)}px;
`;

export const InforContainer = styled.View`
  flex: 1;
  height: ${RFValue(64)}px;

  align-items: flex-start;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.secondary40};

  padding: ${RFValue(6)}px 0;
  margin-left: 20px;
`;

export const Username = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
`;

export const StatusContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: 10px;
  height: 10px;

  border-radius: 5px;

  background-color: ${(props) =>
    props.status ? props.theme.colors.on : props.theme.colors.primary};

  margin-right: 10px;
`;

export const StatusText = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${(props) => props.theme.colors.highlight};
  font-family: ${(props) => props.theme.fonts.inter_medium};
`;
