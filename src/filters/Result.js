import React from 'react'

export default function Result(props) {

    if (props.books.items) {
        let bookArray = [];
        console.log(props.books.items.length)

        for (let i = 0; i < props.books.items.length; i++) {
            bookArray.push(props.books.items[i].volumeInfo.title)   
        } 
        return bookArray.map(book => <p>{book}</p>)
    }

    return (
        <div>
            <p>No Books Yet</p>
        </div>
    )
}