import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function WatchLater() {
    const [movies, setMovies] = useState([])
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const fetchWatchLater = async () => {
            try {
                const response = await axios.get('/api/titles/watchlater', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                if (response.status === 200) {
                    setMovies(response.data)
                }
            } catch (error) {
                console.error('Error while fetching user\'s watchlater movies')
            }
        }
        fetchWatchLater()
    }, [])

    return (
        <div className="watchlater-container">
            <h1>Watch later movie list</h1>
            {movies.map(() => {
                <MovieCard movie={movie} />
            })}
        </div>
    )
}