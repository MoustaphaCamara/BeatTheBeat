import InputTextRoom from "../ui/InputTextRoom/InputTextRoom";
import InputSubmitRoom from "../ui/InputSubmitRoom/InputSubmitRoom";

const QuizzInput = () => {
  return (
    <div className="quizz_input">
      <InputTextRoom placeholder="votre réponse.." />
      <InputSubmitRoom action="répondre" color="fuchsia" />
    </div>
  );
};

export default QuizzInput;
