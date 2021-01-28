import React from 'react';

class Movie extends React.Component {
  addOrRemoveMyListMovie = () => {
    this.props.addToList(this.props.movie);
  };

  componentDidUpdate() {}

  render = () => {
    return (
      <div className='movie'>
        {this.props.poster ? (
          <img src={this.props.poster} alt='Movie poster' />
        ) : (
          <img src='/images/image-not-available.jpg' alt='Movie poster' />
        )}
        <div className='overlay'>
          <div className='title'>{this.props.title}</div>
          <div className='rating'>{this.props.rating}/10</div>
          <div className='plot'>{this.props.overview}</div>
          <div
            data-toggled={this.props.movie.my_list ? 'true' : 'false'}
            className='listToggle'
          >
            <div>
              <i
                onClick={this.addOrRemoveMyListMovie}
                className='fa fa-fw fa-plus'
              ></i>
              <i
                onClick={this.addOrRemoveMyListMovie}
                className='fa fa-fw fa-check'
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Movie;
