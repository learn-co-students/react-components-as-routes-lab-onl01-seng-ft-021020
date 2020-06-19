import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
 
  function display(movie){
    return(
    <div>
      <p>{movie.title}</p>
      <p>{movie.time}</p>
      <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
    </div>
    
    )

  }
  
  return (
    
    <div>
      <h1>Movies Page</h1>
        
      {movies.map(movie => display(movie))}
        
    </div>
  );
};

export default Movies;
