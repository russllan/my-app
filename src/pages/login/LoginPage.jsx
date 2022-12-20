import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './LoginPage.module.css'

function LoginPage() {
    const navigate = useNavigate()
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")
    const handleLogin = e => setLogin(e.target.value);
    const handlePass = e => setPass(e.target.value);
    const clickSignIn = () => {
        if(login && pass === 'admin'){
            navigate('/Dashboard')
        }else{
            setError("Неправильно введены данные")
        }        
    }

  return (
    <div className={css.wrapper}>
        <h1>LOGIN</h1>
        <div className={css.login}>
            <input type="text" placeholder='Username' value={login} onChange={handleLogin} required />
            <input type="password" placeholder='Password' value={pass} onChange={handlePass} required/>
            <div><input type="checkbox"/> Save data?</div>
            <button className={css.signIn} onClick={clickSignIn}>Войти</button>
            <button className={css.signUp}>Зарегистрироваться</button>
        </div>
        <div className={css.errorBlock}>{error}</div>
    </div>
  )
}

export default LoginPage