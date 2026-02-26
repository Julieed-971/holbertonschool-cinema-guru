import './navigation.css'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(
    {
        userUsername,
        setIsLoggedIn
    }
) {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    }
    return (
        <nav className="navbar">
            <div className="header-title">Cinema Guru</div>
            <div className="header-menu">
                <img src="https://picsum.photos/100/100" alt="" />
                <p>Welcome, {userUsername}!</p>
                <span onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</span>
            </div>
        </nav>
    )
}