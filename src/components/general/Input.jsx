import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input(
    {
        label,
        type,
        className,
        value,
        setValue,
        icon,
        inputAttributes
    }

) {
    const handleInput = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <div className={`input-field ${className || ''}`}>
                <div className="input-field-label-icon">
                    {icon && <FontAwesomeIcon icon={icon} />}
                    <label>{label}</label>
                </div>
                <input type={type} value={value} {...inputAttributes} onChange={handleInput} />
            </div>
        </>
    )
}