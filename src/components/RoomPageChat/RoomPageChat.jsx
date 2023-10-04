import InputTextSubmit from "../ui/InputTextSubmit/InputTextSubmit";
import "./RoomPageChat.scss";

const RoomPageChat = () => {
  return (
    <div>
      <h3>CHATBOX</h3>
      <div className="chat_container">
        <div className="chat_message">
          <span className="chat_pseudo">pseudo : </span> Lorem, ipsum dolor.
        </div>
        <div className="chat_message">
          <span className="chat_pseudo">pseudo : </span> Lorem, ipsum dolor.
        </div>
        <div className="chat_input">
          <InputTextSubmit
            placeholder="talk to me"
            action="Envoyer"
            color="linear-gradient(144deg, rgba(242,192,121,1) , rgba(207,139,0,1))"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomPageChat;
