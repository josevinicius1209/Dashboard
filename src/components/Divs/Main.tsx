import React from "react";
import { Principal } from "./styles";
import Topbar from "../Topbar";
import { DataDiv } from "./styles";
import Content1 from "./Content1";
import Content2 from "./Content2";

const MainDiv: React.FC = () => {
  return (
    <Principal>
      <Topbar />
      <DataDiv>
        <Content1 />
        <Content2 />
      </DataDiv>
    </Principal>
  );
};

export default MainDiv;
