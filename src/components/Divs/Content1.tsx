import React from "react";
import { LeftDiv } from "./styles";
import Data1 from "./DataContent/Data1";
import Data4 from "./DataContent/Data4";

const Content1: React.FC = () => {
  return (
    <LeftDiv>
      <Data1 />
      <Data4 />
    </LeftDiv>
  );
};

export default Content1;
