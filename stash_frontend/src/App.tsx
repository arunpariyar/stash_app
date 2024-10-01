import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

import { UserInfo } from "./types/types";

function App() {
  const [user, setUser] = useState<UserInfo>({
    isLoggedIn: false,
    token: undefined,
  });

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
