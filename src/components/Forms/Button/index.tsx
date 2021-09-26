import React from "react";
import { Container, Title } from "./styles";

import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
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
