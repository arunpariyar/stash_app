import "./Sidebar.css";
import { Link } from "react-router-dom";

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

  return (
    <div className="sidebar-container">
      {navItems.map((item) => (
        <Link className="menu-link" to={`${item.link}`}>
          <img src={item.icon}></img>

          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
