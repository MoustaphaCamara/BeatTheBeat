import { useState } from "react";

import "./UserProfil.scss";
import CardStat from "../ui/CardStat/CardStat";

const UserProfil = () => {
	// eslint-disable-next-line no-unused-vars
	const [data] = useState(
		{
			rank: 1,
			pp: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			pseudo: "Askralos",
			points: 54,
			nbGame: 73,
			win: 39,
		},
	);

	return (
		<div className="container-profil">
			<div className="image-profil">
				<img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
			</div>
			<div className="profil-right">
				<div className="pseudo-rank">
          <div className="pseudo">
            <h2>{data.pseudo}</h2>
            <span>modifier</span>
          </div>
					
					<h3>Rank: {data.rank}</h3>
				</div>
				<div className="stats">
					<CardStat statTitle="Win" stat= "86"/>
					<CardStat statTitle="Game" stat="200" />
					<CardStat statTitle="Points" stat= "165"/>
				</div>
			</div>
		</div>
	);
};

export default UserProfil;
