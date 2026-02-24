import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(
    {
        label,
        className,
        onClick,
        icon
    }
) {
    const handleSelect = (event) => {
        setValue(event.target.value)
    }
    return (
        <>
            <button className={`button ${className || ''}`} onClick={onClick}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {label}
            </button>
        </>
    )
}