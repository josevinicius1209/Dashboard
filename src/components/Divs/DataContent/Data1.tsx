import React from "react";
import { HistBox } from "../../Box/styles";
import { Header } from "../styles";
import { LittleTitle } from "../../Text/styles";
import AppProvider from "../../../context/Provider";

const Data1: React.FC = () => {
  return (
    <HistBox>
      <AppProvider>
        <Header>
          <LittleTitle>produto</LittleTitle>
        </Header>
      </AppProvider>
    </HistBox>
  );
};

export default Data1;
