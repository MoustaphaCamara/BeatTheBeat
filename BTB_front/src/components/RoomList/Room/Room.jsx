/* eslint-disable react/prop-types */
import "./Room.scss";

const Room = ({ pseudo, idRoom, nbPlayer, totalPlayer }) => {
  return (
     <div className="room-card">
      <div className="pseudo-idroom">
        <h3 className="pseudo">{pseudo}</h3>
        <div className="id-room">#{idRoom}</div>
      </div>
      <div className="joueur-buttonjoin">
        <div className="joueur">Joueur: {nbPlayer}/{totalPlayer}</div>
        <button>Join</button>
      </div>
     </div>
  )
 
};

export default Room;
