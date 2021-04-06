import React, { createContext, useEffect, useState } from "react";

const ticTacToe = {
  cells: ["", "", "", "", "", "", "", "", ""],
  conditions: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  currentPlayer: "x",
  over: false,
  winner: "",
};

export const AppContext = createContext();

const AppStore = (props) => {
  const conditions = ticTacToe.conditions;
  const [cells, setCells] = useState(ticTacToe.cells);
  const [currentPlayer, setCurrentPlayer] = useState(ticTacToe.currentPlayer);
  const [over, setOver] = useState(ticTacToe.over);
  const [winner, setWinner] = useState(ticTacToe.winner);

  const restGame = () => {
    setWinner("");
    setOver(false);
    setCells(ticTacToe.cells);
  };

  useEffect(() => {
    for (let row of conditions) {
      const a = cells[row[0]] === currentPlayer,
        b = cells[row[1]] === currentPlayer,
        c = cells[row[2]] === currentPlayer;
      if (a && b && c) {
        setWinner(currentPlayer);
        if (!over) setOver(true);
      }
    }
    if (!over) setCurrentPlayer(currentPlayer !== "x" ? "x" : "o");
    if (cells.filter((cell) => cell.trim()).length > 8) setOver(true);
  }, [cells]);

  const fillCell = (cellNumber) => {
    const cellsCopy = [...cells];
    if (cellNumber < 9 && !cellsCopy[cellNumber]) {
      cellsCopy[cellNumber] = currentPlayer;
      setCells(cellsCopy);
    }
  };

  const state = { cells, currentPlayer, over, winner, fillCell, restGame };

  return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>;
};

export default AppStore;
