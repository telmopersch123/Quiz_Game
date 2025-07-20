import React from "react";

import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import Options from "../Options/Options";
import "./Questions.css";
const Questions = () => {
  const { state, dispatch } = useContext(QuizContext);

  const currentQuestion = state.questions[state.currentQuestion];

  const selectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="questions-container">
      <p>
        Pergunta {state.currentQuestion + 1} de {state.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <Options
            key={option}
            option={option}
            answer={currentQuestion.answer}
            selectOption={() => selectOption(option)}
          />
        ))}
      </div>
      {state.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Proxima pergunta
        </button>
      )}
    </div>
  );
};

export default Questions;
