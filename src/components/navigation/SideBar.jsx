import './navigation.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Activity from '../Activity'
import axios from 'axios'

export default function SideBar() {
    const [selected, setSelected] = useState("home")
    const [small, setSmall] = useState(true)
    const [activities, setActivities] = useState([])
    const [showActivities, setShowActivities] = useState(false)

    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName)
        if (pageName === "Home") {
            navigate('/home')
        }
        if (pageName === "Favorites") {
            navigate('/favorites')
        }
        if (pageName === "Watch Later") {
            navigate('/watchlater')
        }
    }
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get('/api/activity')
                if (response.status === 200) {
                    setActivities(response.data)
                }
            } catch (error) {
                console.error('Error during activites fetching', error)
            }
        }
        fetchActivities()
    }, []);

    return (
        <>
            <div className={`sidebar-container ${small ? 'small' : 'expanded'}`}
                onMouseEnter={() => setSmall(false)}
                onMouseLeave={() => setSmall(true)}
            >
                <ul className='navigation-list'>
                    <li onClick={() => setPage("Home")}>
                        <FontAwesomeIcon icon={faFolder} />
                        {!small && "Home"}
                        {!small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                    </li>
                    <li onClick={(e) => { e.stopPropagation(); setPage("Favorites") }}>
                        <FontAwesomeIcon icon={faStar} />
                        {!small && "Favorites"}
                        {!small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                    </li>
                    <li onClick={(e) => { e.stopPropagation(); setPage("Watch Later") }}>
                        <FontAwesomeIcon icon={faClock} />
                        {!small && "Watch Later"}
                        {!small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                    </li>
                </ul>
                {!small && (
                    <ul className="activity-list">
                        {activities.slice(0, 10).map((activity) => {
                            return <Activity key={activity.id} activity={activity} />
                        })}
                    </ul>
                )}
            </div>
        </>
    )
}