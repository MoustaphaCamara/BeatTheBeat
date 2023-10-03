import "./NavBar.scss";

// éléments de la NavBar :
const navList = ["Home", "Profil"];

const NavBar = () => {
  return (
    <div>
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <img src="https://i.ibb.co/q5W3pqc/btb-logo.jpg" alt="btb-logo" />
        </div>
        <div className="app__navbar-links">
          <ul>
            {navList.map((item, index) => (
              <li key={index}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
            <li>
              <p>Sign up</p>
            </li>
            <li>
              <p>Log In</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
