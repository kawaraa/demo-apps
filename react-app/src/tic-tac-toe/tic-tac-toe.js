import React, { useContext } from "react";
import Square from "./square/square";
import GameOver from "./game-over/game-over";
import { TicTacToeContext } from "./state-store/tic-tac-toe-store";
import "./tic-tac-toe.css";

function TicTacToe() {
  const store = useContext(TicTacToeContext);
  const { squares, currentPlayer, over } = store;

  return (
    <main className="tic-tac-toe">
      <header className="tic-tac-toe-header">
        <h1 className="tic-tac-toe-heading">
          It's <span className="current-player">{currentPlayer}</span>'s turn
        </h1>
      </header>
      <article className="squares-wrapper">
        {squares.map((value, i) => (
          <Square value={value} number={i} key={i} />
        ))}
      </article>
      {over && <GameOver />}
    </main>
  );
}

export default TicTacToe;
