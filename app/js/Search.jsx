import React from 'react';
import data from '../data.json';

const Search = () => (
    <div className='search'>
        { data.shows.map(show => <h3>{ show.title }</h3>) }
    </div>
);

export default Search;
