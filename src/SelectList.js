import React, { Component } from 'react'
import propTypes from 'prop-types'


class SelectList extends Component {
  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={ e => this.props.changeShelf(e, this.props.book)}>
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

SelectList.propTypes = {
  book: propTypes.object.isRequired
}

export default SelectList
