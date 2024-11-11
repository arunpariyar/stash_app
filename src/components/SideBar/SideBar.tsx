import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "/images/logo-large.svg";
import minmizeBtn from "/images/icon-minimize-menu.svg";

export default function SideBar() {
  const navItems = [
    {
      name: "home",
      icon: "/images/icon-nav-overview.svg",
      link: "overview",
    },
    {
      name: "transactions",
      icon: "/images/icon-nav-transactions.svg",
      link: "transactions",
    },
    {
      name: "budgets",
      icon: "/images/icon-nav-budgets.svg",
      link: "budgets",
    },
    {
      name: "pots",
      icon: "/images/icon-nav-pots.svg",
      link: "pots",
    },
    {
      name: "bills",
      icon: "/images/icon-nav-recurring-bills.svg",
      link: "bills",
    },
  ];

  function handleBtn() {
    return alert("handle minimize/maximize - coming soon");
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>

      <div className="nav-contents-container">
        <div className="nav-contents">
          {navItems.map((item) => (
            <Link key={item.name} className="menu-link" to={`${item.link}`}>
              <img className="menu-icon" src={item.icon}></img>

              <p className="menu-link-text">
                {item.name[0].toUpperCase() + item.name.substring(1)}
              </p>
            </Link>
          ))}
        </div>
        <button onClick={handleBtn} className="minimize-button">
          <img src={minmizeBtn} alt="" />
          <span>Minimize Menu</span>
        </button>
      </div>
    </div>
  );
}
