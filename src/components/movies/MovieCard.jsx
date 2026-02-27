import './movies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid, faClock as faClockSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular, faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isWatchLater, setIsWatchLater] = useState(false)
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const fetchFavorite = async () => {
            try {
                const response = await axios.get('/api/titles/favorite/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                if (response.status === 200) {
                    setIsFavorite(response.data.some((favorite) => favorite.imdbId === movie.imdbId))
                }
            } catch (error) {
                console.error('Error fetching favorites list', error)
            }
        }
        fetchFavorite()
    }, [])

    useEffect(() => {
        const fetchWatchLater = async () => {
            try {
                const response = await axios.get('/api/titles/watchlater', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                if (response.status === 200) {
                    setIsWatchLater(response.data.some((watchlater) => watchlater.imdbId === movie.imdbId))
                }
            } catch (error) {
                console.error('Error fetching watchlater list', error)
            }
        }
        fetchWatchLater()
    }, [])

    const handleClick = async (type) => {
        if (type === "favorite") {
            if (!isFavorite) {
                try {
                    const request = await axios.post(`/api/titles/favorite/${movie.imdbId}`, {}, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                    if (request.status === 200) {
                        setIsFavorite(true)
                    }
                } catch (error) {
                    console.error('Error when adding a movie to favorite', error)
                }
            } else if (isFavorite) {
                try {
                    const request = await axios.delete(`/api/titles/favorite/${movie.imdbId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                    if (request.status === 200) {
                        setIsFavorite(false)
                    }
                } catch (error) {
                    console.error('Error when adding a movie to favorite', error)
                }
            }
        }
        if (type === "watchlater") {
            if (!isWatchLater) {
                try {
                    const request = await axios.post(`/api/titles/watchlater/${movie.imdbId}`, {}, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                    if (request.status === 200) {
                        setIsWatchLater(true)
                    }
                } catch (error) {
                    console.error('Error when adding a movie to watchlater', error)
                }
            } else if (isWatchLater) {
                try {
                    const request = await axios.delete(`/api/titles/watchlater/${movie.imdbId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                    if (request.status === 200) {
                        setIsWatchLater(false)
                    }
                } catch (error) {
                    console.error('Error when adding a movie to watchlater', error)
                }
            }
        }
    }

    return (
        <li>
            <div className="favorite-icon" onClick={() => handleClick("favorite")}>
                {isFavorite
                    ? <FontAwesomeIcon icon={faStarSolid} />
                    : <FontAwesomeIcon icon={faStarRegular} />
                }
            </div>
            <div className="watchlater-icon" onClick={() => handleClick("watchlater")}>
                {isWatchLater
                    ? <FontAwesomeIcon icon={faClockSolid} />
                    : <FontAwesomeIcon icon={faClockRegular} />
                }
            </div>
            <h1>{movie.title}</h1>
            <p>{movie.synopsis}</p>
            {movie.genres.map((genre) => {
                <p key={genre}>{genre}</p>
            })}
        </li>
    )
}