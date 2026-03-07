import './components.css'

export default function Activity({ activity }) {
    return (
        <li>
            <p>
                <span className="activity-username">{activity.user.username}</span>
                 <span> added </span>
                <span className="activity-movie-title">{activity.title.title}</span>
                 <span> to {activity.activityType} - {new Date(activity.createdAt).toLocaleDateString()}</span>
            </p>
        </li>
    )
}
