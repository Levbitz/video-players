import React from "react";
//import "./styles.css";
import { BsPersonSquare } from "react-icons/bs";

import ReactTooltip from "react-tooltip";

export default function MyTool() {
  return (
    <div className="App">
      <BsPersonSquare
        data-tip
        data-for="registerTip"
        size={30}
        style={{ marginRight: 20 }}
      />

      <ReactTooltip id="registerTip" data-position="bottom" effect="solid">
        Tooltip for the register button <br />
        Tooltip for the register button <br />
        Tooltip for the register button <br />
        Tooltip for the register button <br />
      </ReactTooltip>
    </div>
  );
}
