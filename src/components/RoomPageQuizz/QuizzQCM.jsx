import React from "react";

const choices = ["Prop A", "Prop B", "Prop C", "Prop D"];
const QuizzQCM = () => {
  return (
    <div className="quizz_qcm">
      {choices.map((choice, index) => (
        <button className="choice" key={index}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default QuizzQCM;
