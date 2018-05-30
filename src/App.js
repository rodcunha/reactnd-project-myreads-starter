import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'
import SearchBar from './SearchBar'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then( books => {
      this.setState( { books } )
        console.log(this.state.books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBar} />
          <Route exact path="/" render={ () => (
            <div>
              <BookShelf />
              <OpenSearch />
            </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
