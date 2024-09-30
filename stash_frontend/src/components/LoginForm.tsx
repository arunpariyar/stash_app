import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./LoginForm.css";

async function signin(
  url: string,
  formData: { email: string; password: string }
) {
  try {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log(error);
  }
}

export default function LoginForm({ setUser }) {
  const url = "http://localhost:3000/api/users/login";

  const [form, setForm] = useState({
    email: "jadehayden@mail.com",
    password: "abc123",
  });

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = await signin(url, form).then((response) => response?.json());

    if (!data.error) {
      setUser((prevState: any) => ({
        ...prevState,
        isLoggedIn: true,
        token: data.token,
      }));
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
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
