import React from 'react'
import propTypes from 'prop-types'

const ShelfChanger = (props) => {
  const {book, changeShelf} = props

  return(
    <div className="book-shelf-changer">
      <select
          value={book.shelf}
          onChange={ e => changeShelf(book, e.target.value)}>
        <option value="" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default ShelfChanger

ShelfChanger.propTypes = {
  changeShelf: propTypes.func
}
