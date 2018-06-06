import React, { Component } from 'react'
import propTypes from 'prop-types'

class BookShelf extends Component {
  render() {
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
  title: propTypes.string.isRequired
}

export default BookShelf
