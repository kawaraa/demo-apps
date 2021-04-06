import React, { useContext, useState } from "react";
import { AppContext } from "../store/app-store";
import "./cell.css";

function Cell(props) {
  const { fillCell } = useContext(AppContext);
  const [height, setHeight] = useState("");
  const handleClick = () => (Boolean(props.value) ? null : fillCell(props.number));

  return (
    <button
      onClick={handleClick}
      name={props.number}
      disabled={Boolean(props.value)}
      style={{ height }}
      className="cell"
      ref={(el) => el && el.offsetWidth !== el.offsetHeight && setHeight(el.offsetWidth + "px")}>
      <span className="cell-value">{props.value}</span>
    </button>
  );
}

export default Cell;
