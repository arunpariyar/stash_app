import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <>you are logged in </>;
  }

  return (
    <>
      <div className="login-container">
        <LoginForm></LoginForm>
      </div>
    </>
  );
}

export default App;
