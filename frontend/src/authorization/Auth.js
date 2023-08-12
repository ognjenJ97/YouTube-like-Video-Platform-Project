import { useState } from "react";
import { login } from "../services/auth";
import styles from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/usersSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username, password);
    }

  const goOnRegistration = () => {
    navigate("/registration")
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <input className={styles.input} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
        <input className={styles.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleLogin}>Log in</button>
        <p onClick={goOnRegistration}>New on our page? Click to make your account</p>
      </div>
    </div>
  );
};

export default Login;
