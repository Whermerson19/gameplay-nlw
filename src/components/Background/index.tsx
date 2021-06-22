import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  const theme = useTheme();

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
