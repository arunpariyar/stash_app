import "./OverviewHeader.css";
import { Link } from "react-router-dom";
import caretRight from "/images/icon-caret-right.svg";

interface OverviewHeaderProps {
  title: string;
  link: string;
  linkText: string;
}

export default function OverviewHeader({
  title,
  link,
  linkText,
}: OverviewHeaderProps) {
  return (
    <div className="overview-header">
      <div className="overview-title">{title}</div>
      <Link className="overview-link" to={`/${link}`}>
        {linkText}
        <span>
          <img src={caretRight} alt="" />
        </span>
      </Link>
    </div>
  );
}
