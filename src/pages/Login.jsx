import React,{useState} from "react";


import styles from "./Login.module.css";
import { UseAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const{login } =  UseAuth()
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const navigate =useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

      login(email,password)
      navigate("/app/cities")
    

  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}