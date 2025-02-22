import React, { useState } from "react";

const Password: React.FC = () => {
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');

    const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const changeRePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
    };

    let ans: string = '';

    if (!password && !rePassword) {
        ans = 'Proszę wprowadzić hasło';
    }
    else if (password != rePassword) {
        ans = 'Hasła nie są zgodne';
    }

    return (
        <div>
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
            <div>{ans}</div>
        </div>
    );
};

export default Password;