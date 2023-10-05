import React from "react";

const choices = ["Réponse A", "Réponse B", "Réponse C", "Réponse D"];
const QuizzQCM = () => {
  return (
    <div className="quizz_qcm">
      {choices.map((choice, index) => (
        <button class="choice choice-custom" key={index}>
          <span>{choice}</span>
          <span>Survole</span>
        </button>
      ))}
    </div>
  );
};

export default QuizzQCM;
