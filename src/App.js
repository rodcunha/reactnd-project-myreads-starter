import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'
import SearchBar from './SearchBar'
import Book from './Book'


class BooksApp extends React.Component {
    state = {
      books: [],
      searchResults: []
    }

  componentDidMount = () => {
    BooksAPI.getAll().then( books => {
      this.setState( { books } )
      //  console.log(this.state.books)
    })
  }

// function to fetch the books for the search component
  fetchBooks = (query) => {
    const booksOnShelves = this.state.books;

    BooksAPI.search( query )
      .then( res => {
        if (res instanceof Array && res.length > 0) {
            res.map( booksFromSearch => {
              return booksOnShelves.find( book => {
                if( booksFromSearch.id === book.id) {
                  booksFromSearch.shelf = book.shelf
                  return booksFromSearch;
                } else {
                  booksFromSearch.shelf = 'none'
                }
              })
            })
          const searchResults = res.filter(book => book.imageLinks && book.authors);
          this.setState({ searchResults });
      } else {
        this.setState({ searchResults: [] })
      }
    })
      .catch( err => { console.log('ERROR: ', err)})
}


//function to change the shelf of the books
  changeShelf = (book, shelf) => {
    console.log(book, shelf)
    BooksAPI.update(book, shelf).then( resp => {
      BooksAPI.getAll().then( books => {
        if (books !== this.state.books)
        this.setState({books})
      })
    })
  }


  render() {

    let read, currentlyReading, wantToRead
      read = this.state.books.filter( book => (
        book.shelf === 'read'
    ))
      currentlyReading = this.state.books.filter( book => (
        book.shelf === 'currentlyReading'
    ))
      wantToRead = this.state.books.filter( book => (
        book.shelf === 'wantToRead'
    ))

    return (
      <div className="app">
        <Route path="/search" render={ () => (
          <SearchBar changeShelf={this.changeShelf} fetchBooks={this.fetchBooks} results={this.state.searchResults} books={this.state.books} />
        )} />
          <Route exact path="/" render={ () => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf title="Currently Reading" />
                <ol className="books-grid">
                  {currentlyReading.map( book => (
                    <Book key={book.id} title={book.title} authors={book.authors} img={book.imageLinks.thumbnail} book={book} changeShelf={this.changeShelf} />
                  ))}
                </ol>

              <BookShelf title="Want to Read" />
                <ol className="books-grid">
                {wantToRead.map( book => (
                  <Book key={book.id} title={book.title} authors={book.authors} img={book.imageLinks.thumbnail} book={book} changeShelf={this.changeShelf} />
                ))}
                </ol>
              <BookShelf title="Read" />
                <ol className="books-grid">
                {read.map( book => (
                  <Book key={book.id} title={book.title} authors={book.authors} img={book.imageLinks.thumbnail} book={book} changeShelf={this.changeShelf} />
                ))}
                </ol>
              <OpenSearch />
            </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
