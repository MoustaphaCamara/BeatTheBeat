import Banner from "../../components/Banner/Banner";
import FavorisQuizz from "../../components/FavorisQuizz/FavorisQuizz";
import UserProfil from "../../components/UserProfil/UserProfil";
import Ranking from "../../components/Ranking/Ranking";

import "./Profil.scss";

const Profil = () => {
	return (
		<>
			<Banner />

			<div className="profil_container">
				<div className="profil_left_part">
					<UserProfil />
					<FavorisQuizz />
				</div>
				<div className="profil_right_part">
					<Ranking />
				</div>
			</div>
		</>
	);
};

export default Profil;
