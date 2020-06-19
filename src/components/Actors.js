import React from 'react';
import { actors } from '../data';

const renderActor = (actor, index) =>(
  <div className='actor' key={index}>
    <h2>{actor.name}</h2>
    <p>Movies:</p>
    <ul>
      {actor.movies.map((movie,index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
)

const Actors = () => {
  return (
    <div>
      {console.log(actors)}
       <h1>Actors Page</h1>
       {actors.map((actor,index )=> renderActor(actor,index))}
    </div>
  );
};

export default Actors;
