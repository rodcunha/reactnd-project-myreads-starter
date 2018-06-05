import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBar extends Component {
  state = {
    query: '',
    result: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    BooksAPI.search(query)
      .then( books => {
        if (books.length > 0) {
          this.setState({result: books})
          console.log(this.state.result)
        }
        })
        .catch( err => { result: 'no books to display'})
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={ e => this.updateQuery(e.target.value)}
              placeholder="Search by title or author"
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.result.map( book => (
              (book.imageLinks.thumbnail != undefined) ?
                <Book key={book.id} title={book.title} author={book.authors} img={book.imageLinks.thumbnail} />
                :
                <Book key={book.id} title={book.title} author={book.authors} />
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  query: propTypes.string
}

export default SearchBar
