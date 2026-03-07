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
    const accessToken = localStorage.getItem("accessToken")

    const navigate = useNavigate();

    const setPage = (pageName) => {
        if (selected != pageName) {
            setSelected(pageName)
        }
        navigate(`/${pageName}`)
    }
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get('/api/activity', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                if (response.status === 200) {
                    setActivities(response.data)
                    if (response.data.length > 0) {
                        setShowActivities(true)
                    }
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
                    <li onClick={() => setPage("home")}>
                        <FontAwesomeIcon icon={faFolder} />
                        {!small && "Home"}
                        {!small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                    </li>
                    <li onClick={() => setPage("favorites")}>
                        <FontAwesomeIcon icon={faStar} />
                        {!small && "Favorites"}
                        {!small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                    </li>
                    <li onClick={() => setPage("watchlater")}>
                        <FontAwesomeIcon icon={faClock} />
                        {!small && "Watch Later"}
                        {!small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                    </li>
                </ul>
                {!small && showActivities && (
                    <>
                        <div className="latest-activity-container">
                            <h2 className='activity-title'>Latest Activities</h2>
                            <ul className="activity-list">
                                {activities.slice(0, 10).map((activity) => {
                                    return <Activity key={activity.id} activity={activity} />
                                })}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}