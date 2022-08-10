import React, { useState } from "react";
import { Ellipse, Options, EllipseDiv } from "./styles";
import { LittleTitle } from "../Text/styles";
import { FaAngleDown } from "react-icons/fa";

const Selector: React.FC = () => {
  const [opened, setState] = useState(false);
  return (
    <EllipseDiv>
      <Ellipse onClick={() => setState(!opened)} height={opened ? 120 : 28}>
        <Options>
          <LittleTitle>Mode</LittleTitle>
          <LittleTitle>Max</LittleTitle>
          <LittleTitle>Min</LittleTitle>
        </Options>
        <FaAngleDown size="20px" />
      </Ellipse>
    </EllipseDiv>
  );
};

export default Selector;
