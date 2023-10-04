import { useState } from "react";
import "./Ranking.scss";
import RankCell from "./RankCell/RankCell";

const Ranking = () => {

  const [data, setData] = useState([
    {
      rank: 1,
      pp: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      pseudo: "Askralos",
      points:54,
    },
    {
      rank: 2,
      pp: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      pseudo: "Carter",
      points: 50,
    },
    {
      rank: 3,
      pp: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      pseudo: "Philibert le fromage",
      points: 49,
    },
  ]);


  return (
    <div className="container-leaderboard">
      <h3>Classement</h3>
      <div className="list-leaderboard">
        {data.map((user, index) => (
          <RankCell key={index} {...user}/>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
