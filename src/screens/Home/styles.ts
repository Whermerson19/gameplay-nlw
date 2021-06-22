import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(40)}px ${RFValue(24)}px;
  padding-top: ${RFValue(56)}px;
`;

export const UserInfoContainer = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex: 1;

  margin-left: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${(props) => props.theme.fonts.rajdhani_regular};
  color: ${(props) => props.theme.colors.heading};

  margin-right: 10px;
`;

export const Username = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${(props) => props.theme.fonts.rajdhani_bold};
  color: ${(props) => props.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${(props) => props.theme.fonts.inter_regular};
  color: ${(props) => props.theme.colors.highlight};
`;

export const ButtonContainer = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  align-items: center;
  justify-content: center;
`;
