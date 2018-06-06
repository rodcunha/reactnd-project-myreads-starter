import React, { Component } from 'react'
import propTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  render() {

    const {books, changeShelf} = this.props
    // let read, currentlyReading, wantToRead
    //   read = books.filter( book => (
    //     book.shelf === 'read'
    // ))
    //   currentlyReading = books.filter( book => (
    //     book.shelf === 'currentlyReading'
    // ))
    //   wantToRead = books.filter( book => (
    //     book.shelf === 'wantToRead'
    // ))
    //
    // const shelves = [
    //   {
    //     title: 'Currently Reading',
    //     shelf: currentlyReading
    //   },
    //   {
    //     title: 'Read',
    //     shelf: read
    //   },
    //   {
    //     title: 'Want to Read',
    //     shelf: wantToRead
    //   }
    // ]
    return(
      <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">

            </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  
}

export default BookShelf
