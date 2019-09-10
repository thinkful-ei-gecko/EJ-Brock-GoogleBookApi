import React from 'react'
import './Result.css'

export default function Result(props) {

    if (props.books.items) {
        let bookArray = [];

        for (let i = 0; i < props.books.items.length; i++) {

            let price;
            if (props.books.items[i].saleInfo.listPrice === undefined) {
                price = 'No price listed'
            } else {
                price = `$ ${props.books.items[i].saleInfo.listPrice.amount}`
            }

            let img;
            if (props.books.items[i].accessInfo.viewability === 'NO_PAGES'){
                img = 'No image available'
            } else {
                img = props.books.items[i].volumeInfo.imageLinks.smallThumbnail
            }

            let summary;
            if (props.books.items[i].searchInfo === undefined){
                summary = 'No summary snippet available'
            } else {
                summary =  props.books.items[i].searchInfo.textSnippet
            }

            let author;
            if (props.books.items[i].authors === undefined){
                author = 'Author Unknown'
            } else {
                author =  props.books.items[i].volumeInfo.authors[0]
            }

            bookArray.push(
                {title: props.books.items[i].volumeInfo.title,
                author: author,
                price: price,
                summary: summary,
                image: img
                
            })   
        } 
        return bookArray.map(book => 
            <div className="book">
                <p className="book_Title">{book.title}</p>
                <p className="book_Author">Author: {book.author}</p>
                <p className="book_Price">{book.price}</p>
                <p className="book_Summary">{book.summary}</p>
                <img className="book_img" alt={book.title} src={book.image}></img>
            </div>)
    }

    return (
        <div className="nobook">
            <p>No Books Yet</p>
        </div>
    )
}