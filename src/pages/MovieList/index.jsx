import { useState } from 'react';
import { movies } from '../../utils/films.jsx'

// const movies = [
//     {
//         title: 'Fast and furious',
//         imgUrl: Furious ,
//     },
    
//     {
//         title: 'Simpsons',
//         imgUrl: Simpson,
//     },
//     {
//         title: 'OUI-OUI',
//         imgUrl: OUI ,
//     }];

// export {movies}

function Movies() {
    const [click, setClick] = useState(0);
    const handleClick = () => {
        setClick(click + 1);
    };

  return (
    <>
      <h1>HOME</h1>
      <h2>New Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title}</h3>
            <img src={movie.imgUrl} alt={movie.title} />
            <p> LiKes : {click }</p>  
            <button onClick={handleClick}>Like</button>   
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;