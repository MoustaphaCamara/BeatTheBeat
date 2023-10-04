import "./Room.scss";

const Room = ({ pseudo, number, nbPlayer, totalPlayer }) => {
  return (
     <div className="room-card">
      <div className="pseudo-idroom">
        <div className="pseudo">Askralos</div>
        <div className="id-room">#{number}</div>
      </div>
      <div className="joueur-buttonjoin">
        <div className="joueur">Joueur: 4/5</div>
        <button>Join</button>
      </div>
     </div>
  )
 
};

export default Room;
