import './components.css'

export default function Activity({ activity }) {
    return (
        <li>
            <p>
                {activity.user.username} added {activity.title.title} to {activity.activityType} to watch later - {new Date(activity.createdAt).toLocaleDateString()}
            </p>
        </li>
    )
}