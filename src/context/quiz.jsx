import { useReducer } from "react";
import { QuizContext } from "./QuizContext";

import questions from "../data/questions_compete";

const STAGES = ["Start", "Option", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  typeLinguagen: "",
};

const typeLenguage = (type) => {
  const typeLinguage = questions.find((indice) => {
    return indice.category === type.toUpperCase();
  });
  if (typeLinguage) {
    return typeLinguage.questions;
  } else {
    console.warn("Tipo não encontrado:", type);
    return questions;
  }
};

const shuffleArrays = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quizReduce = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    case "CHANGE_TYPE_LINGUAGEN": {
      const filteredQuestions = typeLenguage(action.payload.typeLinguagem);
      return {
        ...state,
        gameStage: STAGES[2],
        typeLinguagen: action.payload.typeLinguagem,
        questions: filteredQuestions,
      };
    }
    case "REORDER_QUESTIONS": {
      const reorderedQuestions = state.questions.map((category) => {
        return {
          ...state,
          questions: shuffleArrays(category.questions),
        };
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };
    }

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedOption: action.payload,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
      };
    }
    case "NEW_GAME": {
      return initialState;
    }
    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;
      if (answer === option) {
        correctAnswer = 1;
      }
      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    }

    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReduce, initialState);

  const value = {
    state,
    dispatch,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
