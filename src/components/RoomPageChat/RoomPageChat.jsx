import { useState } from "react";
import InputTextRoom from "../ui/InputTextRoom/InputTextRoom";
import InputSubmitRoom from "../ui/InputSubmitRoom/InputSubmitRoom";
import "./RoomPageChat.scss";

const RoomPageChat = () => {
  const [data, setData] = useState([
    {
      pseudo: "Carter",
      message: "Lorem ipsum dolor sit amet.",
    },
    {
      pseudo: "Askralos",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, natus!",
    },
    {
      pseudo: "Carter",
      message: "oe mec gg wp",
    },
    {
      pseudo: "Askralos",
      message: "ez",
    },
  ]);

  return (
    <div>
      <div className="chat_container">
        {data.map((chat, index) => (
          <div className="chat_message" key={index}>
            <span className="chat_pseudo">{chat.pseudo} : </span> {chat.message}
          </div>
        ))}
        <div className="chat_input">
          <div className="quizz_input">
            <InputTextRoom placeholder="pas d'insultes svp" />
            <InputSubmitRoom action="Envoyer" color="cyan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPageChat;
