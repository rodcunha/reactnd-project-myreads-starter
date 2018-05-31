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

  getCurrentlyReading = (shelf) => {
      let arr = []
      if (this.state.books.shelf === shelf) {
        arr.push(this.state.books)
      }
      return arr
  }


  render() {
           console.log(this.getCurrentlyReading('read'))
    return (
      <div className="app">
        <Route path="/search" component={SearchBar} />
          <Route exact path="/" render={ () => (
            <div>
              <BookShelf title="Currently Reading" />
                <ol className="books-grid">
                  <Book />
                  <Book />
                </ol>

              <BookShelf title="Want to Read" />
                <ol className="books-grid">
                  <Book />
                  <Book />
                </ol>
              <BookShelf title="Read" />
                <ol className="books-grid">
                  <Book />
                  <Book />
                </ol>
              <OpenSearch />
            </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
