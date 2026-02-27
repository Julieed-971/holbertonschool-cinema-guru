import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(
    {
        label,
        className,
        onClick,
        icon,
        type = "button"
    }
) {
    return (
        <>
            <button type={type} className={`button ${className || ''}`} onClick={onClick}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {label}
            </button>
        </>
    )
}