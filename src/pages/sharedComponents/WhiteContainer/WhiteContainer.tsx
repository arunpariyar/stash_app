import "./WhiteContainer.css";
import { PropsWithChildren } from "react";

export default function WhiteContainer({ children }: PropsWithChildren) {
  return <div className="white-container">{children}</div>;
}
