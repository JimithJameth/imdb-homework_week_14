import React from 'react';
import ReactDOM from 'react-dom';
import FilmListing from './components/FilmListing.jsx'

window.onload = function(){
  ReactDOM.render(
    <FilmListing/>,
    document.getElementById('app')
 );
}

