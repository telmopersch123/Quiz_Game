import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QuizProvider } from "./context/quiz.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
