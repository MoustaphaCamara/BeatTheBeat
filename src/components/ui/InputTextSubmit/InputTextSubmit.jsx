import "./InputTextSubmit.scss";

const InputTextSubmit = ({ placeholder, color, action }) => {
  return (
    <div className="quizz_input">
      <input type="text" placeholder={placeholder} />
      <input type="submit" value={action} style={{ background: color }} />
    </div>
  );
};

export default InputTextSubmit;
