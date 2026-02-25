import './auth.css'
import Input from './../../components/general/Input'
import Button from './../../components/general/Button'
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Register(
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
                    Create a new account
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
                    label="Sign Up"
                    type="submit"
                    className="register-button"
                    // onClick={onSubmit}
                    icon={faPlus}
                />
            </div>
        </>
    )
}