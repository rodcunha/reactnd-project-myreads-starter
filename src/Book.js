import React from 'react'
import propTypes from 'prop-types'

const Book = (props) => {
    const {changeShelf} = props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.img})` }}></div>
            <div className="book-shelf-changer">
              <select
                  value={props.book.shelf}
                //  onClick={ e => { if (!props.book.shelf && e.target.value === 'currentlyReading') { e.target.value = 'none' }}}
                  onChange={ e => changeShelf(props.book, e.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.title}</div>
          <div className="book-authors">{props.author}</div>
        </div>
      </li>
    )
  }

Book.propTypes = {
  changeShelf: propTypes.func
}

export default Book
