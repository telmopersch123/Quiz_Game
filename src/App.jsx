import { useContext, useEffect } from "react";
import { QuizContext } from "../src/context/QuizContext";
import "./App.css";
import GameOver from "./components/GameOver/GameOver";
import LinguagenOption from "./components/LinguagenOption/LinguagenOption";
import Questions from "./components/Questions/Questions";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const { state, dispatch } = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="title-initial">Quiz de Programação</h1>
        {state.gameStage === "Start" && <Welcome />}
        {state.gameStage === "Option" && <LinguagenOption />}
        {state.gameStage === "Playing" && <Questions />}
        {state.gameStage === "End" && <GameOver />}
      </div>
    </>
  );
}

export default App;
