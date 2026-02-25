import './auth.css'
import Input from './../../components/general/Input'
import Button from './../../components/general/Button'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';


export default function Login(
    {
        username,
        password,
        setUsername,
        setPassword
    }
) {
    return (
        <>
            <div className="login-register-form">
                <div className="login-register-form-title">
                    Sign in with you account
                </div>
                <Input
                    label="Username:"
                    type="text"
                    className="username"
                    value={username}
                    setValue={setUsername}
                    icon={faUser}
                />
                <Input
                    label="Password:"
                    type="password"
                    className="password"
                    value={password}
                    setValue={setPassword}
                    icon={faKey}
                />
                <Button
                    label="Sign In"
                    type="submit"
                    className="login-button"
                    // onClick={onSubmit}
                    icon={faKey}
                />
            </div>
        </>
    )
}