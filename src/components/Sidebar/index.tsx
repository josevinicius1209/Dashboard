import React, { useState } from "react";
import { Body, Button, Panel, DivSidebar } from "./styles";
import { FaAngleLeft, FaHome } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <DivSidebar width={pressed ? 20 : 170} height={pressed ? 10 : 60}>
      <Body width={pressed ? 20 : 170} height={pressed ? 10 : 60}>
        <Button onClick={() => setPressed(!pressed)}>
          <FaAngleLeft
            color="white"
            size="100%"
            style={{ transform: pressed ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </Button>
        <span style={{ visibility: pressed ? "hidden" : "visible" }}>
          <a>Menu</a>
          <Panel>
            <FaHome
              size={pressed ? "0px" : "20px"}
              style={{ verticalAlign: "text-bottom" }}
            />
            Dashboard
          </Panel>
        </span>
      </Body>
    </DivSidebar>
  );
};

export default Sidebar;
