import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {
  render() {
    return (
      <div className='titles-wrapper'>
        {this.props.movies.map((movie) => {
          return (
            <div className='movie'>
              <Movie
                title={movie.title}
                rating={movie.vote_average}
                overview={movie.overview}
                poster={movie.poster_path}
                movie={movie}
                addToList={this.props.addToMyMovieList}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
