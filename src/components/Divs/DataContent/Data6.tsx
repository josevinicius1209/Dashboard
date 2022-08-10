import React from "react";
import { PlansBox } from "../../Box/styles";
import { Header } from "../styles";
import { LittleTitle } from "../../Text/styles";
import Barras from "./Barras/index";

const Data6: React.FC = () => {
  return (
    <PlansBox>
      <Header>
        <LittleTitle>grafico 3</LittleTitle>
      </Header>
      <Barras />
    </PlansBox>
  );
};

export default Data6;
