import "./InputSubmitRoom.scss";

const InputSubmitRoom = ({ action, color }) => {
  return (
    <input
      type="submit"
      className="input_submit"
      value={action}
      style={{ background: color }}
      
    />
  );
};

export default InputSubmitRoom;
