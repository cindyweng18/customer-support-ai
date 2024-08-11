import "./styles/loginRegister.css";
import Link from "next/link";
import { useState } from "react";
import axios from "../utils/axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        username,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Error registering user");
    }
  };

  return (
    <div>
      <div className="header">
        <Link href="homepage"><h1 className="logo">Boba Broskis</h1></Link>
      </div>
      <div class="wrapper">
        <div className="container">
          <h2 className="title">Register</h2>
          <form onSubmit={handleSubmit} className="formBox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <div className="swap">
            <p>Returning customer?</p>
            <Link href="/login" className="swapLink"> Click here to login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
