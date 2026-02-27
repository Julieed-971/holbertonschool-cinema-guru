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
        'action',
        'drama',
        'comedy',
        'biography',
        'romance',
        'thriller',
        'war',
        'history',
        'sport',
        'sci-fi',
        'documentary',
        'crime',
        'fantasy']

    return (
        <div className="filter">
            <SearchBar title={title} setTitle={setTitle} />
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
            <ul>
                {genreList.map((genre) => (
                    <Tag key={genre} genre={genre} genres={genres} setGenres={setGenres} filter={true} />
                ))}
            </ul>
        </div>
    )
}