import React from "react";
import { Container, Title } from "./styles";

import { RectButton } from "react-native-gesture-handler";

interface Props extends RectButton {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
