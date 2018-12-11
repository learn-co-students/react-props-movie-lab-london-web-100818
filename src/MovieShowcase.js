import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () =>
    movieData.map((idx,value) => {
      return <MovieCard key={value} {...idx} />
    })


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


MovieCard.defaultProps = {
title: 'Unknown',
IMDBRating: null,
genres: ['No Genre(s) Found'],
poster: 'default'
}
