import React, { useContext, useState } from "react";
import { TicTacToeContext } from "../state-store/tic-tac-toe-store";
import "./square.css";

function Square(props) {
  const { fillSquare } = useContext(TicTacToeContext);
  const [height, setHeight] = useState("");
  const handleClick = () => (Boolean(props.value) ? null : fillSquare(props.number));

  return (
    <button
      onClick={handleClick}
      name={props.number}
      disabled={Boolean(props.value)}
      style={{ height }}
      className={"square " + props.value}
      ref={(el) => el && el.offsetWidth !== el.offsetHeight && setHeight(el.offsetWidth + "px")}>
      <span className="square-value">{props.value}</span>
    </button>
  );
}

export default Square;
