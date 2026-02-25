import './auth.css';
import Login from './Login'
import Register from './Register'
import { useState } from 'react';
import axios from 'axios';
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

    const handleSubmit = async (onSubmit) => {
        onSubmit.preventDefault();
        try {
            if (_switch) {
                const request = await axios.post('/api/auth/login', { username, password })
                    if (request.status === 200) {
                    const accessToken = request.data.accessToken;
                    localStorage.setItem('accessToken', accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true)
                }
            } else {
                const request = await axios.post('/api/auth/register', {username, password});
                if (request.status === 200) {
                    const accessToken = request.data.accessToken;
                    localStorage.setItem('accessToken', accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true)
                }
            }
        } catch (error) {
            console.error('Error during login or register', error);
        }
    }
    return (
        <div className="login-register-form-container" >
            <form onSubmit={handleSubmit}>
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