import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

interface PermissionProps {
  owner: boolean;
}

export const Container = styled(RectButton)`
  width: 100%;

  flex-direction: row;

  margin-top: ${RFValue(40)}px;
`;

export const IconContainer = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  margin-right: ${RFValue(24)}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  height: ${RFValue(64)}px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.secondary40};

  padding: ${RFValue(6)}px 0;
`;

export const FirstHalf = styled.View`
  height: 100%;

  align-items: flex-start;
  justify-content: space-between;
`;

export const LastHalf = styled.View`
  height: 100%;

  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
`;

export const Date = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const DateText = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.inter_medium};

  margin-left: ${RFValue(8)}px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${(props) => props.theme.colors.highlight};
  font-family: ${(props) => props.theme.fonts.inter_regular};
`;

export const Permission = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const PermissionIcon = styled(FontAwesome)<PermissionProps>`
  color: ${(props) =>
    props.owner ? props.theme.colors.on : props.theme.colors.primary};

  margin-right: ${RFValue(8)}px;
`;

export const PermissionText = styled.Text<PermissionProps>`
  color: ${(props) =>
    props.owner ? props.theme.colors.on : props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.inter_regular};
  font-size: ${RFValue(13)}px;
`;
