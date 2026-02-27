import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Favorites() {
    const [movies, setMovies] = useState([])
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const fetchFavorite = async () => {
            try {
                const response = await axios.get('/api/titles/favorite', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                if (response.status === 200) {
                    setMovies(response.data)
                }
            } catch (error) {
                console.error('Error while fetching user\'s favorite movies')
            }
        }
        fetchFavorite()
    }, [])

    return (
        <div className="favorite-container">
            <h1>Movies you like</h1>
            {movies.map((movie) => {
                <MovieCard movie={movie} />
            })}
        </div>
    )
}