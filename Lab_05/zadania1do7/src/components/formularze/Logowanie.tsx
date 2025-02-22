import React, { useState } from "react";

const Login: React.FC = () => {
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');

    const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const changeRePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
    };

    const isEmpty = !login || !password || !rePassword;
    const isCorrect = password == rePassword;

    const loginBehav = () => {
        if (isCorrect) {
            alert('Zalogowano poprawnie');
        }
        else {
            alert('Hasła nie są zgodne');
        }
    }

    return (
        <div>
            <div>
                <label>
                    Login:
                    <input type="text" value={login} onChange={changeLogin}/>
                </label>
            </div>
            <div>
                <label>
                    Hasło:
                    <input type="password" value={password} onChange={changePass}/>
                </label>
            </div>
            <div>
                <label>
                    Powtórz hasło:
                    <input type="password" value={rePassword} onChange={changeRePass}/>
                </label>
            </div>
            <div>
                <button onClick={loginBehav} disabled={isEmpty}>
                    Zaloguj
                </button>
            </div>
        </div>
    );
};

export default Login;