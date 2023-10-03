import { useState } from "react";
import "./Ranking.scss";

const Ranking = () => {
  const [data, setData] = useState(["user1", "user2", "user3"]);
  return (
    <>
      <h1>Classement</h1>
      <ul>
        {data.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default Ranking;
