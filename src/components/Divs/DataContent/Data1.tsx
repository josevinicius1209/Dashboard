import React from "react";
import { HistBox } from "../../Box/styles";
import { HeaderBlue } from "../styles";
import { LegendText, LittleTitle } from "../../Text/styles";
import Galaxy from "../../../assets/Galaxy.png";

const Data1: React.FC = () => {
  return (
    <HistBox>
      <HeaderBlue>
        <LittleTitle>Galaxy S21 (128GB)</LittleTitle>
      </HeaderBlue>
      <HeaderBlue>
        <LegendText>RRP: R$5.999,99</LegendText>
      </HeaderBlue>
      <img src={Galaxy} alt="Galaxy" />
    </HistBox>
  );
};

export default Data1;
