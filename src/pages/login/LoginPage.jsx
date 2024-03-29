import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./LoginPage.module.css";

function LoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const clickSignIn = () => {
    const user = localStorage.getItem("test");
    const userRes = JSON.parse(user);
    console.log(userRes);
    if (userRes !== null) {
      if (login == userRes.login && pass == userRes.password) {
        return navigate("/");
      }
    }

    if (login == "admin" && pass == "admin") {
      return navigate("/Dashboard");
    } else {
      return setError("Неправильно введены данные");
    }
  };

  const clickSignUp = () => {
    const register = {
      login: login,
      password: pass,
    };
    let reg = JSON.stringify(register);
    localStorage.setItem("test", reg);
    console.log(reg);
  };

  return (
    <div className={css.wrapper}>
      <h1>LOGIN</h1>
      <div className={css.login}>
        <input
          type="text"
          placeholder="Username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <div>
          <input type="checkbox" /> Save data?
        </div>
        <button className={css.signIn} onClick={clickSignIn}>
          Войти
        </button>
        <button className={css.signUp} onClick={clickSignUp}>
          Зарегистрироваться
        </button>
      </div>
      <div className={css.errorBlock}>{error}</div>
    </div>
  );
}

export default LoginPage;
