import './components.css'

export default function Activity({ activity }) {
    return (
        <li>
            <p>
                {activity.user.username} added {activity.title.title} to {activity.activityType} - {new Date(activity.createdAt).toLocaleDateString()}
            </p>
        </li>
    )
}
