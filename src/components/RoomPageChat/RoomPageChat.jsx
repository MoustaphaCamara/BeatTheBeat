import { useState } from "react";
import InputTextSubmit from "../ui/InputTextSubmit/InputTextSubmit";
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
