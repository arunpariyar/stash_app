import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  const navItems = [
    {
      name: "home",
      icon: "/images/icon-nav-overview.svg",
      link: "Overview",
    },
    {
      name: "transactions",
      icon: "/images/icon-nav-transactions.svg",
      link: "Transactions",
    },
    {
      name: "budgets",
      icon: "/images/icon-nav-budgets.svg",
      link: "Budgets",
    },
    {
      name: "pots",
      icon: "/images/icon-nav-pots.svg",
      link: "Pots",
    },
    {
      name: "bills",
      icon: "/images/icon-nav-recurring-bills.svg",
      link: "Bills",
    },
  ];

  return (
    <div className="sidebar-container">
      {navItems.map((item) => (
        <Link className="menu-link" to={`${item.link}`}>
          <img className="menu-icon" src={item.icon}></img>

          <p className="menu-link-text">
            {item.name[0].toUpperCase() + item.name.substring(1)}
          </p>
        </Link>
      ))}
    </div>
  );
}
