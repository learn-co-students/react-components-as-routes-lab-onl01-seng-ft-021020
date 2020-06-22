import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const render = directors.map((director) => {
    return <div>Name:{director.name} Movies:{director.movies}</div>
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {render}
    </div>
  );
}

export default Directors
