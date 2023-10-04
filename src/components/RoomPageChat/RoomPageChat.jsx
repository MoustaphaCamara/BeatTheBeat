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
          <div className="quizz_input">
            <input type="text" placeholder="talk to me" />
            <input type="submit" value="Valider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPageChat;
