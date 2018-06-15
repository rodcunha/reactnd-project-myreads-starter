import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBar extends Component {
  state = {
    query: '',

  }

// Update the input field (controlled component) check if the book exists on the shelves or not and assign the shelf value or assign none if the books isn't on the shelves.
  updateQuery = (e) => {
     const query = e;

    if (query.length >= 0) {
      this.setState({ query })
      this.props.fetchBooks(query)
      } else {
        this.setState({ result: [] })
      }
    }


updateSearchBooks = (  ) => {
  BooksAPI.getAll()
    .then(res => {
      console.log(res)
    })
}

//render method
  render() {
    const {changeShelf, results} = this.props
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
            results.map( book => (
              (book.imageLinks.thumbnail) ?
                <Book key={book.id} title={book.title} authors={book.authors} img={book.imageLinks.thumbnail} book={book} changeShelf={changeShelf} />
                :
                <Book key={book.id} title={book.title} authors={book.authors} book={book} changeShelf={changeShelf} />
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  query: propTypes.string,
  result: propTypes.array
}

export default SearchBar
