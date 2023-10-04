import "./RoomPageQuizz.scss";
import QuizzInput from "./QuizzInput";
import QuizzQCM from "./QuizzQCM";
import QuizzResponse from "./QuizzResponse";
const RoomPageQuizz = () => {
  return (
    <div className="quizz_container">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3 className="quizz_timer">20s</h3>
      <div className="quizz_image">
        <img src="src/assets/quizz_girl.png" alt="quizz_girl" />
      </div>
      <QuizzInput />
      <QuizzQCM />
      <QuizzResponse />
    </div>
  );
};

export default RoomPageQuizz;
