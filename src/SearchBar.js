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

  updateQuery = (e) => {
    const query = e.trim();
    const booksOnShelves = this.props.books;
    if (query.length >= 0) {
      this.setState({query})
      BooksAPI.search(query)
        .then( res => {
          if (res instanceof Array) {
            res.map( booksInSearch => {
              booksOnShelves.map( onShelves =>  {
                if (booksInSearch.id === onShelves.id) {
                  return booksInSearch.shelf = onShelves.shelf
                } else {
                  return booksInSearch.shelf = 'none'
                }
              })
            })
            const result = res.filter(book => book.imageLinks && book.authors);
            this.setState({ result });
        } else {
          this.setState({ result: [] })
        }
      })
        .catch( err => { console.log('ERROR: ', err)})
    } else {
      this.setState({ result: [] })
    }
  }

  render() {
    const {books, changeShelf} = this.props
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
              (book.imageLinks.thumbnail) ?
                <Book key={book.id} title={book.title} author={book.authors} img={book.imageLinks.thumbnail} book={book} changeShelf={changeShelf} />
                :
                <Book key={book.id} title={book.title} author={book.authors} book={book} changeShelf={changeShelf} />
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
