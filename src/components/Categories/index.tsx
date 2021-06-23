import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { useTheme } from "styled-components";

import { SvgProps } from "react-native-svg";

import { GradientContainer, Container, FilterSquad, Title } from "./styles";

interface Props extends RectButtonProps {
  isScheduling?: boolean;
  icon: React.FC<SvgProps>;
  title: string;
  selected: boolean;
}

export function Categories({
  isScheduling = false,
  icon: Icon,
  title,
  selected,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <GradientContainer
      isScheduling={isScheduling}
      selected={selected}
      colors={[colors.secondary40, colors.secondary50]}
    >
      <Container {...rest}>
        {isScheduling && <FilterSquad checked={selected} />}

        <Icon />
        <Title>{title}</Title>
      </Container>
    </GradientContainer>
  );
}
