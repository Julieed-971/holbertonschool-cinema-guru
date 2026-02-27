import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import Filter from '../../components/movies/Filter'
import Button from './../../components/general/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HomePage() {
    const [movies, setMovies] = useState([])
    const [minYear, setMinYear] = useState(1900)
    const [maxYear, setMaxYear] = useState(2022)
    const [genres, setGenres] = useState([])
    const [sort, setSort] = useState("")
    const [title, setTitle] = useState("")
    const [page, setPage] = useState(1)
    const accessToken = localStorage.getItem('accessToken')

    const loadMovies = async (pageNum) => {
        try {
            const response = await axios.get('/api/titles/advancedsearch', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                params: {
                    maxYear,
                    minYear,
                    genres: genres.join(','),
                    title,
                    page: pageNum,
                    sort
                }
            })
            if (response.status === 200) {
                setMovies((prev) => pageNum === 1 ? response.data.titles : [...prev, ...response.data.titles])
            }
        } catch (error) {
            console.error('Error fetching movies', error)
        }
    }

    useEffect(() => {
        setPage(1)
        loadMovies(1)
    }, [sort, genres, minYear, maxYear, title])

    return (
        <div className="homepage-container">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            {movies.map((movie) => (
                <MovieCard key={movie.imdbId} movie={movie} />
            ))}
            <Button
                label={"Load More..."}
                className={"loadmore"}
                onClick={() => {
                    const nextPage = page + 1
                    setPage(nextPage)
                    loadMovies(nextPage)
                }}
            />
        </div>
    )
}