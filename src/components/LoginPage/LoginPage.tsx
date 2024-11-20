// FIXME i have turned of the code to fetch login from server temporarily for development purpose.
// TODO  it is important have this fixed later

import "./LoginPage.css";
// import CONFIG from "../config/config";
import { Form, redirect } from "react-router-dom";
import Header from "../Header/Header";
import logo from "/images/logo-large.svg";

interface FormData {
  email: string;
  password: string;
}

// interface LoginRequestResponse {
//   error: boolean;
//   token: string;
// }

// async function LoginRequest(
//   url: string,
//   formData: FormData
// ): Promise<LoginRequestResponse> {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// }

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // const errors = {};

  const loginDetails: FormData = { email, password };
  // console.log(loginDetails);

  // const data = await LoginRequest(
  //   `${CONFIG.baseUrl}/users/login`,
  //   loginDetails
  // );

  // if (!data.error) {
  return redirect("/dashboard");
  // }

  // alert("username and password dont match");
  // return errors;
}

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="auth-media-container">
        <div className="auth-media">
          <div>
            <img src={logo} />
          </div>

          <div className="info">
            <p className="title">
              Keep track of your money and save for your future
            </p>
            <p className="summary">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <Form method="post" className="login-form" id="contact-form">
          <p className="login-text">Login</p>
          <label className="input-label">Email</label>
          <input
            className="input-field-default"
            type="text"
            name="email"
            placeholder="jadehayden@mail.com"
            defaultValue={"jadehayden@mail.com"}
          ></input>
          <label className="input-label">Password</label>
          <input
            className="input-field-default"
            type="password"
            name="password"
            placeholder="abc123"
            defaultValue={"abc123"}
          ></input>
          <button className="submit-btn" type="submit">
            Login
          </button>
          <div className="info-text">
            Need to create an account ?{" "}
            <a href="/" className="signup-link">
              {" "}
              Sign Up
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}
