import "./RoomPageQuizz.scss";
import QuizzInput from "./QuizzInput";
import QuizzQCM from "./QuizzQCM";
import QuizzResponse from "./QuizzResponse";
import { useState } from "react";

const RoomPageQuizz = () => {
  const [type, setType] = useState("input");

  return (
    <div className="quizz_container">
      {/* temporaire pr check les rendus */}
      <p>Dev mode : choisis cque tu veux frérot </p>
      <div className="state">
        <button onClick={() => setType("input")}>change to input</button>
        <button onClick={() => setType("qcm")}>qcm</button>
        <button onClick={() => setType("answer")}>answer</button>
      </div>
      {/* EO rendus */}
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3 className="quizz_timer">20s</h3>
      <div className="quizz">
        {/* <img src="src/assets/quizz_girl.png" alt="quizz_girl" /> */}
        {(type == "input" && <QuizzInput />) ||
          (type == "qcm" && <QuizzQCM />) ||
          (type == "answer" && <QuizzResponse />)}
      </div>
    </div>
  );
};

export default RoomPageQuizz;
