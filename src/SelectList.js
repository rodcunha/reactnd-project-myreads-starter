import React, { Component } from 'react'


class SelectList extends Component {
  render() {
    return(
      <div className="book-shelf-changer">
        <select book={book} onChange={ e => this.changeShelf(e, book)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default SelectList
