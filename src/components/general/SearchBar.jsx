import "./general.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function SearchBar(
    {
        title,
        setTitle
    }
) {
    const handleInput = (event) => {
        setTitle(event.target.value)
    }
    return (
        <>
            <div className="search-bar">
                <FontAwesomeIcon className="input-icon" icon={faMagnifyingGlass} />
                <input
                    type="search"
                    value={title}
                    onChange={handleInput}
                    placeholder="Search Movies"
                />
            </div>

        </>
    )
}