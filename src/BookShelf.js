import React from 'react'

const BookShelf = (props) => {

    return(
      <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">

            </div>
      </div>
    )
}

export default BookShelf
