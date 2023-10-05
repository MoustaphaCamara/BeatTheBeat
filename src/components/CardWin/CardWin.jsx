import ButtonLogIn from "../ui/ButtonNavLogIn/ButtonLogIn";
import ButtonSignIn from "../ui/ButtonNavSignIn/ButtonSignIn";
import "./CardWin.scss";

const CardWin = () => {
	return (
		<div className="container-win">
			<div className="card-win">
				<div className="winner">
					<h1>Askralos a gagné !!</h1>
				</div>
				<div className="podiums">
					<div className="podium">
						<h2><span className="span-1st">1st</span></h2>
						<h3>
							Carter 36 pts
						</h3>
					</div>
					<div className="second-third">
						<div className="podium">
							<h2><span className="span-2nd">2nd</span></h2>
							<h3>
								Askralos 32 pts
							</h3>
						</div>
						<div className="podium">
							<h2><span className="span-3rd">3rd</span></h2>
							<h3>
								Thomas 27 pts
							</h3>
						</div>
					</div>
				</div>
				<div className="button-home-play">
					<ButtonSignIn content="Home" />
					<ButtonLogIn content="Play Again" />
				</div>
			</div>
		</div>
	);
};

export default CardWin;
