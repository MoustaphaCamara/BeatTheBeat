import "./NavBar.scss";

// éléments de la NavBar :
const navList = ["Button", "Button", "Button", "Button", "Button"];

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          {navList.map((item) => (
            <li className="nav_item">{item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
