import './movies.css'
import { useState } from 'react'

export default function Tag(
    {
        genre,
        filter,
        genres,
        setGenres
    }
) {

    const [selected, setSelected] = useState(false)
    const handleTag = () => {
        if (selected) {
            setGenres(genres.filter((g) => g !== genre))
            setSelected(false)
        } else {
            setGenres([...genres, genre])
            setSelected(true)
        }
    }

    return (
        <li onClick={handleTag}
            className={`tag ${selected ? 'selected' : ''}`}
        >
            {genre}
        </li>
    )
}