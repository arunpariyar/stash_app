import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const token = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log(token);
    } catch (error) {}
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
