import { useLocation } from "react-router-dom";
import { Location } from "react-router-dom";
import "./pageHeader.css";

export default function PageHeader() {
  const location: Location = useLocation();
  const path = location.pathname;

  const pageName = path.slice(path.lastIndexOf("/") + 1);

  const title =
    pageName === "dashboard" || pageName === "overview"
      ? "Overview"
      : pageName[0].toUpperCase() + pageName.substring(1);

  return (
    <>
      <div className="page-title">{title}</div>
    </>
  );
}
