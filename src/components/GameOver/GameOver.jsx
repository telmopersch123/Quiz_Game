import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import "./GameOver.css";

const GameOver = () => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div className="gameover-container">
      <h2>Resultado Final</h2>
      <p>
        Sua pontuação: <span className="score-highlight">{state.score}</span>
      </p>
      <p>
        Você acertou <strong>{state.score}</strong> de {state.questions.length}{" "}
        questões.
      </p>
      <img
        src="https://raw.githubusercontent.com/matheusbattisti/quiz_react/3234b0fd070c26ef972b70116362ab8950928b71/src/img/welldone.svg"
        alt="Ícone de conclusão"
      />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>
        Reiniciar Quiz
      </button>
    </div>
  );
};

export default GameOver;
