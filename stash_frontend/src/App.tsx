import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState({ isLoggedIn: false, token: "" });

  if (user.isLoggedIn) {
    return <> Token Received ! </>;
  }

  return (
    <>
      <div className="login-container">
        <LoginForm setUser={setUser}></LoginForm>
      </div>
    </>
  );
}

export default App;
