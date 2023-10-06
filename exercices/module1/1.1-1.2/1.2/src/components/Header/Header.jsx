import logo from './../../assets/LOGO_HEVINCI.png';

const Header = (props) => (
    <div>
        <h1>{props.course}</h1>
        <img src={logo} alt="img ecole"></img>
    </div>
  )

  export default Header  