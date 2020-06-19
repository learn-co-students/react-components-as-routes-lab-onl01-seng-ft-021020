import React from 'react';
import { directors } from '../data';


const Directors = () => {

  function display(director){
    return(
      <div>
        <p>{director.name}</p>
        <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => display(director))}
    </div>
  );
}

export default Directors
