import React from "react";

import { Container, AvatarImage } from "./styles";

export function Avatar() {
  return (
    <Container>
      <AvatarImage
        source={{
          uri: "https://avatars.githubusercontent.com/u/68500665?s=400&u=35bbcee8685197fb4677234b41892af476cef24a&v=4",
        }}
      />
    </Container>
  );
}
