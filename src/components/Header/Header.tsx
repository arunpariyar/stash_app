import "./Header.css";
import logo from "/images/logo-large.svg";

export default function Header() {
  return (
    <div className="container">
      <img src={logo}></img>;
    </div>
  );
}
