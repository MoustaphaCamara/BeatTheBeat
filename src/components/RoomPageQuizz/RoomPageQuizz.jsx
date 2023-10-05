import "./RoomPageQuizz.scss";
import QuizzInput from "./QuizzInput";
import QuizzQCM from "./QuizzQCM";
import QuizzResponse from "./QuizzResponse";
import { useState } from "react";

const RoomPageQuizz = () => {
  const [type, setType] = useState("input");
  const [timer, setTimer] = useState(20);
  const clock = () => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setTimer(20);
      }
    }, 1000);
  };
  clock();

  return (
    <div className="quizz_container">
      {/* temporaire pr check les rendus */}
      <div className="state">
        <button onClick={() => setType("input")}>input</button>
        <button onClick={() => setType("qcm")}>qcm</button>
        <button onClick={() => setType("answer")}>answer</button>
      </div>
      {/* EO rendus */}
      <h2>Lorem ipsum dolor sit amet ?</h2>
      <h3 className="quizz_timer">{timer}s</h3>
      <div className="quizz">
        <img
          src="https://images.unsplash.com/photo-1696229250077-bf5e4d7f7106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="quizz_picture"
        />
        {(type == "input" && <QuizzInput />) ||
          (type == "qcm" && <QuizzQCM />) ||
          (type == "answer" && <QuizzResponse />)}
      </div>
    </div>
  );
};

export default RoomPageQuizz;
