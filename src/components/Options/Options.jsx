import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import "./Options.css";

const Options = ({ option, answer, selectOption }) => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div
      className={`option ${state.answerSelected && option === answer ? "correct" : ""} 
        ${state.answerSelected && option !== answer && state.answerSelected !== answer ? "wrong animationWrong" : state.answerSelected && option !== answer ? "wrong" : ""} `}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
