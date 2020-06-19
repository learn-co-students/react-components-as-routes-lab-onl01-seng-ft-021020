import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const display = (actor) => {
    return(
      <div>
        <p>{actor.name}</p>
        <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => display(actor))}
    </div>
  );
};

export default Actors;
