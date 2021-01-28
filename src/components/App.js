import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import MovieList from './MovieList.js';
import { getAll, addToList, removeFromList, genres } from './lib/MovieAPI';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      queryTerm: '',
      myMovieList: [],
    };
    genres().then((g) => {
      this.setState({ genres: g.sort((a, b) => (a.name > b.name ? 1 : -1)) });
      getAll().then((movieList) => {
        this.setState({
          movies: movieList,
          myMovieList: movieList
            .filter((movie) => movie.my_list)
            .map((m) => m.id),
        });
      });
    });
  }
  filteredMovies = () => {
    let querySearch = this.state.queryTerm.toLowerCase();
    let movieList = this.state.movies;

    let filteredArr = movieList.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(querySearch) ||
        movie.overview.toLowerCase().includes(querySearch)
      );
    });
    if (querySearch.length > 0) {
      return filteredArr;
    } else {
      return movieList;
    }
  };

  addToMyMovieList = (movie) => {
    if (this.state.myMovieList.some((id) => id === movie.id)) {
      this.setState({
        myMovieList: this.state.myMovieList.filter(function (movieId) {
          return movie.id !== movieId;
        }),
      });
      removeFromList(movie);
      movie.my_list = false;
    } else {
      this.setState((previousState) => ({
        myMovieList: [...previousState.myMovieList, movie.id],
      }));
      addToList(movie);
      movie.my_list = true;
    }
  };

  updateSearchedMovies = (query) => {
    this.setState({ queryTerm: query });
  };

  moviesInGenreAfterFilter(genre) {
    return this.filteredMovies().filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });
  }

  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Fragment>
              <Header
                updateSearch={this.updateSearchedMovies}
                queryResultString={this.state.queryTerm}
                filteredMovies={this.filteredMovies()}
              />
              {this.state.genres && this.state.genres.length > 0
                ? this.state.genres.map((genre, i) => {
                    if (this.moviesInGenreAfterFilter(genre).length > 0) {
                      return (
                        <div key={genre.id} className='titleList'>
                          <div className='title'>
                            <h1>{genre.name}</h1>
                            <MovieList
                              movies={this.filteredMovies().filter((movie) => {
                                return movie.genre_ids.includes(genre.id);
                              })}
                              addToMyMovieList={this.addToMyMovieList}
                            ></MovieList>
                          </div>
                        </div>
                      );
                    } else {
                      return '';
                    }
                  })
                : 'no genres'}
            </Fragment>
          </Route>
          <Route path='/my_list'>
            <div>
              <Header
                updateSearch={this.updateSearchedMovies}
                queryResultString={this.state.queryTerm}
                filteredMovies={this.filteredMovies()}
              />
              <div className='titleList'>
                <div className='title'>
                  <MovieList
                    movies={this.filteredMovies().filter((movie) => {
                      return this.state.myMovieList.includes(movie.id);
                    })}
                    addToMyMovieList={this.addToMyMovieList}
                  ></MovieList>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  };
}

export default App;
