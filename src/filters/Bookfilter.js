import React from 'react'
import './Filter.css'

export default function Bookfilter(props){

    let key =  'AIzaSyByEcdZDlX9IZvKTIysQwKXkYnCIoRBmCw'

    let state = {
        bookOption: props.bookFilter
    }

    function handleChange(event){
        state.bookOption = event.target.value
        let url = `https://www.googleapis.com/books/v1/volumes?q=${props.searchTerm}&printType=${state.bookOption}&key=${key}`
        console.log('handleChange: ' + url)
        props.fetch(url)
        props.change(state.bookOption)
    }

    return (
        <label>Book Type: 
          <select className="spacing" value = {state.filteredOption} onChange={handleChange}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          </label>
    )
}