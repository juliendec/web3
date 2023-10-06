import logo from "./../../assets/LOGO_HEVINCI.png";

const Header = ({ course }) => (
  <div>
    <h1>{course}</h1>
    <img src={logo} alt="img ecole"></img>
  </div>
);

export default Header;
