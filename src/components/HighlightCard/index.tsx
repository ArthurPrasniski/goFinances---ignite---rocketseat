import React from "react";

import {
  Conainter,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransection,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <Conainter type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransection type={type}>{lastTransaction}</LastTransection>
      </Footer>
    </Conainter>
  );
}
