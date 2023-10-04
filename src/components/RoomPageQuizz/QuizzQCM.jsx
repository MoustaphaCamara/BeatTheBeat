import React from "react";

const choices = ["Prop A", "Prop B", "Prop C", "Prop D"];
const QuizzQCM = () => {
  return (
    <div className="quizz_qcm">
      {choices.map((choice) => (
        <button className="choice">{choice}</button>
      ))}
    </div>
  );
};

export default QuizzQCM;
