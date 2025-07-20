import { useContext } from "react";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { QuizContext } from "../../context/QuizContext";

import "./LinguagemOption.css";

const LinguagenOptions = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div className="language-options-container">
      <h2 className="language-title">Escolha o tema do quiz</h2>
      <div className="language-cards">
        <div className="language-card">
          <div className="language-icon html-icon">
            <FaHtml5 className="icons" />
          </div>
          <h3>HTML</h3>
          <p>Teste seus conhecimentos sobre marcação web</p>
          <button
            onClick={() =>
              dispatch({
                type: "CHANGE_TYPE_LINGUAGEN",
                payload: { typeLinguagem: "html" },
              })
            }
            className="language-select-btn"
          >
            Selecionar
          </button>
        </div>

        <div className="language-card">
          <div className="language-icon css-icon">
            <FaCss3 className="icons" />{" "}
          </div>
          <h3>CSS</h3>
          <p>Desafie-se com perguntas sobre estilização</p>
          <button
            onClick={() =>
              dispatch({
                type: "CHANGE_TYPE_LINGUAGEN",
                payload: { typeLinguagem: "css" },
              })
            }
            className="language-select-btn"
          >
            Selecionar
          </button>
        </div>

        <div className="language-card">
          <div className="language-icon js-icon">
            <FaSquareJs className="icons" />{" "}
          </div>
          <h3>JavaScript</h3>
          <p>Responda questões sobre programação web</p>
          <button
            onClick={() =>
              dispatch({
                type: "CHANGE_TYPE_LINGUAGEN",
                payload: { typeLinguagem: "javascript" },
              })
            }
            className="language-select-btn"
          >
            Selecionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinguagenOptions;
