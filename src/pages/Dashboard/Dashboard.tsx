import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import "./Dashboard.css";

export default function Dashboard() {
  //TODO I will later use the use params to get the names of the page but first I need to set the sidebar right and apply the grid functionality
  return (
    <div className="dashboard-container">
      <div className="side-bar">
        <SideBar></SideBar>
      </div>
      <div className="dashboard-pages">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
