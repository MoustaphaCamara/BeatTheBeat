import "./NavBar.scss";
import logo from "../../assets/BTB logo.png";
import ButtonSignIn from "../ui/ButtonNavSignIn/ButtonSignIn";
import ButtonLogIn from "../ui/ButtonNavLogIn/ButtonLogIn";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="sideleft">
        <img src={logo} alt="Logo" />
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/profil">
          <span>Profil</span>
        </NavLink>
        <NavLink to="/room">
          <span>Room</span>
        </NavLink>
        <NavLink to="/win">
          <span>Win</span>
        </NavLink>
        <NavLink to="/waiting_room">
          <span>Waiting Room</span>
        </NavLink>
      </div>

      <div className="sideright">
        <ButtonSignIn content="Sign In" />
        <NavLink to="/login">
          <ButtonLogIn content="Log In" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
