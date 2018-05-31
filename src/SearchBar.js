import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBar extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render() {
    let showBooks
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        showBooks = this.props.books.filter( (book) => match.test(book.title || book.authors))
      } else {
        showBooks = this.props.books
      }

      showBooks.sort(sortBy('title'));

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
            {showBooks.map( book => (
              <Book title={book.title} author={book.authors} img={book.imageLinks.thumbnail} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBar
