import './movies.css'
import SearchBar from './../general/SearchBar'
import Input from './../general/Input'
import SelectInput from './../general/SelectInput'
import Tag from './../movies/Tag'

export default function Filter(
    {
        minYear,
        setMinYear,
        maxYear,
        setMaxYear,
        sort,
        setSort,
        genres,
        setGenres,
        title,
        setTitle
    }
) {
    const genreList = [
        'animation',
        'adventure',
        'action',
        'drama',
        'comedy',
        'biography',
        'family',
        'romance',
        'thriller',
        'mystery',
        'war',
        'history',
        'sci-fi',
        'documentary',
        'crime',
        'fantasy']

    return (
        <div className="filter-container">
            <div className="search-select-filters">
                <SearchBar title={title} setTitle={setTitle} />
                <div className="select-filters">
                    <Input
                        label={"Min Year"}
                        className="minYear"
                        type="number"
                        value={minYear}
                        setValue={setMinYear}
                        inputAttributes={{ min: 1900, max: new Date().getFullYear() }}
                    />
                    <Input
                        label={"Max Year"}
                        className="maxYear"
                        type="number"
                        value={maxYear}
                        setValue={setMaxYear}
                        inputAttributes={{ min: 1900, max: new Date().getFullYear() }}
                    />
                    <SelectInput
                        label={"Sort"}
                        options={["latest", "oldest", "highest rated", "lowest rated"]}
                        className={"sort-movies"}
                        value={sort}
                        setValue={setSort}
                    />
                </div>
            </div>
            <div className="tags-filters">
                <ul>
                    {genreList.map((genre, index) => (
                        <Tag key={index} genre={genre} genres={genres} setGenres={setGenres} filter={true} />
                    ))}
                </ul>
            </div>
        </div>
    )
}