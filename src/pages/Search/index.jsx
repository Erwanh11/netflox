import React, { useState } from 'react'; 
import { movies } from '../../utils/films.jsx'

const SearchMovie = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

 const handleSearch = (e) => {
    e.preventDefault();

    const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchResults(filteredMovies);
};

    return (
        <>
            <h1>Liste de Films</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Recherche ton titre bg"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit">Rechercher</button>
            </form>

            <ul>
                {searchValue
                    ? searchResults.map((movie) => (
                          <li key={movie.id}>{movie.title}</li>
                      ))
                    : movies.map((movie) => (
                          <li key={movie.id}>{movie.title}</li>
                      ))}
            </ul>
        </>
    );
};

export default SearchMovie;