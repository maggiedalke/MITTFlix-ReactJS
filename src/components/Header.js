import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  handleQueryChange = (event) => {
    this.props.updateSearch(event.target.value);
  };

  render = () => {
    return (
      <header className='header'>
        <a href='/'>
          <img
            src='https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png'
            alt='netflix-font'
            border='0'
          />
        </a>
        <div id='navigation' className='navigation'>
          <nav>
            <ul>
              <li>
                <Link to='/my_list'>My List</Link>
              </li>
            </ul>
          </nav>
        </div>
        <form id='search' className='search'>
          <input
            type='search'
            onChange={this.handleQueryChange}
            placeholder='Search for a title...'
          />
          <div className='searchResults'>
            <p>
              {this.props.queryResultString
                ? 'Found ' +
                  this.props.filteredMovies.length +
                  ' movies with the query "' +
                  this.props.queryResultString +
                  '"'
                : ''}
            </p>
          </div>
        </form>
      </header>
    );
  };
}

export default Header;
