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
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then( books => {
      this.setState( { books } )
        console.log(this.state.books)
    })
  }

  // distributeBooks = (shelf) => {
  //     const result = this.state.books.map( (book) => {
  //       return book.shelf === shelf
  //     })
  // }


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
        <Route path="/search" component={SearchBar} />
          <Route exact path="/" render={ () => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf title="Currently Reading" />
                <ol className="books-grid">
                  {currentlyReading.map( book => (
                    <Book key={book.id} title={book.title} author={book.author} img={book.imageLinks.thumbnail} />
                  ))}
                </ol>

              <BookShelf title="Want to Read" />
                <ol className="books-grid">
                {wantToRead.map( book => (
                  <Book key={book.id} title={book.title} author={book.author} img={book.imageLinks.thumbnail} />
                ))}
                </ol>
              <BookShelf title="Read" />
                <ol className="books-grid">
                {read.map( book => (
                  <Book key={book.id} title={book.title} author={book.author} img={book.imageLinks.thumbnail} />
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
