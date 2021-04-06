import React, { useContext } from "react";
import { AppContext } from "./store/app-store";
import Cell from "./square/cell";
import GameOver from "./game-over/game-over";
import "./app.css";

function App() {
  const store = useContext(AppContext);
  const { cells, currentPlayer, over } = store;

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-heading">
          It's <span className="current-player">{currentPlayer}</span>'s turn
        </h1>
      </header>
      <article className="cells-wrapper">
        {cells.map((value, i) => (
          <Cell value={value} number={i} key={i} />
        ))}
      </article>
      {over && <GameOver />}
    </main>
  );
}

export default App;
