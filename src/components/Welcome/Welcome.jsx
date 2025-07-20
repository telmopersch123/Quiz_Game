/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

import React from "react";
import "./Welcome.css";

const Welcome = () => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div className="welcome-container">
      <h2>Vamos começar?</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img
        src="https://raw.githubusercontent.com/matheusbattisti/quiz_react/3234b0fd070c26ef972b70116362ab8950928b71/src/img/quiz.svg"
        alt="Welcome Quiz"
      />
    </div>
  );
};

export default Welcome;
