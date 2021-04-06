import { useContext } from "react";
import { AppContext } from "../store/app-store";
import "./game-over.css";

function GameOver() {
  const store = useContext(AppContext);
  const { restGame, winner } = store;
  const result = winner ? `The winner is ${winner}` : "Game ended in a draw";

  return (
    <div className="game-over">
      <article className="game-over-inner">
        <h2>Game Over</h2>
        <p>{result}.</p>
        <button onClick={() => restGame()}>Play again</button>
      </article>
    </div>
  );
}

export default GameOver;
