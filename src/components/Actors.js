import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const render = actors.map((actor) => {
    return <div>Name{actor.name} Movies:{actor.movies}</div>
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {render}
    </div>
  );
};

export default Actors;
