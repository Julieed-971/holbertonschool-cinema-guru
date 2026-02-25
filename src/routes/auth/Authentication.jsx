import './auth.css';
import Login from './Login'
import Register from './Register'
import { useState } from 'react';
import Button from './../../components/general/Button'

export default function Authentication(
    {
        setIsLoggedIn,
        setUserUsername
    }
) {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-register-form-container">
            <form >
                <div className="login-register-form-buttons">
                    <Button className={`sign-in ${_switch ? 'active' : ''}`} label="Sign In" onClick={() => setSwitch(true)} />
                    <Button className={`sign-up ${!_switch ? 'active' : ''}`} label="Sign Up" onClick={() => setSwitch(false)} />
                </div>
                {_switch ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )}
            </form>
        </div>
    )
}