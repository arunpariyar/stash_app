import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./LoginForm.css";
import { UserInfo } from "../types/types";

interface FormData {
  email: string;
  password: string;
}

interface LoginRequestResponse {
  error: boolean;
  token: string;
}

interface LoginFormProps {
  setUser: (user: UserInfo) => void;
}

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

export default function LoginForm({ setUser }: LoginFormProps) {
  const url = "http://localhost:3000/api/users/login";

  const [form, setForm] = useState<FormData>({
    email: "jadehayden@mail.com",
    password: "abc123",
  });

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = await LoginRequest(url, form);

    console.log(data);

    if (!data.error) {
      setUser({
        isLoggedIn: true,
        token: data.token,
      });
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <p>Login</p>
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={handleChange}
      ></input>
      <button>Login</button>
    </form>
  );
}
