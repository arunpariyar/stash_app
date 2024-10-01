// import { useState } from "react";
import "./LoginPage.css";
// import LoginForm from "../LoginForm/LoginForm";
import CONFIG from "../config/config";

// import { UserInfo } from "../../types/types";

// function LoginPage() {
//   const [user, setUser] = useState<UserInfo>({
//     isLoggedIn: false,
//     token: undefined,
//   });

//   if (user.isLoggedIn) {
//     return <> Token Received ! </>;
//   }

//   return (
//     <>
//       <div className="login-container">
//         <LoginForm setUser={setUser}></LoginForm>
//       </div>
//     </>
//   );
// }

// export default LoginPage;

// import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Form, redirect } from "react-router-dom";
// import "./LoginForm.css";
// import { UserInfo } from "../../types/types";
// import CONFIG from "../config/config";

interface FormData {
  email: string;
  password: string;
}

interface LoginRequestResponse {
  error: boolean;
  token: string;
}

// interface LoginFormProps {
//   setUser: (user: UserInfo) => void;
// }

async function LoginRequest(
  url: string,
  formData: FormData
): Promise<LoginRequestResponse> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

// export default function LoginForm({ setUser }: LoginFormProps) {
//   const url = CONFIG.baseUrl + "/users/login";

//   const [form, setForm] = useState<FormData>({
//     email: "jadehayden@mail.com",
//     password: "abc123",
//   });

//   async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const data = await LoginRequest(url, form);

//     console.log(data);

//     if (!data.error) {
//       setUser({
//         isLoggedIn: true,
//         token: data.token,
//       });
//     }
//   }

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const loginDetails: FormData = { email, password };

  const data = await LoginRequest(
    `${CONFIG.baseUrl}/users/login`,
    loginDetails
  );

  console.log(data);
  if (!data.error) {
    redirect("/dashboard");
  }

  return null;
}

export default function LoginPage() {
  return (
    <div className="login-container">
      <Form method="post" className="login-form" id="contact-form">
        <p>Login</p>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="jadehayden@mail.com"
          defaultValue={"jadehayden@mail.com"}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="abc123"
          defaultValue={"abc123"}
        ></input>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
