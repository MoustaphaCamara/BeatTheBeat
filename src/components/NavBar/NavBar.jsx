import "./NavBar.scss";
import logo from "../../assets/BTB logo.png";
import ButtonSignIn from "../ui/ButtonNavSignIn/ButtonSignIn";
import ButtonLogIn from "../ui/ButtonNavLogIn/ButtonLogIn";

const NavBar = () => {
	return (
		<nav>
			<div className="sideleft">
				<img src={logo} alt="Logo" />
				<a href="#">
					<span>Home</span>
				</a>
				<a href="#">
					<span>Profil</span>
				</a>
			</div>

			<div className="sideright">
				<ButtonSignIn />
				<ButtonLogIn content="Log In"/>
			</div>
		</nav>
	);
};

export default NavBar;
