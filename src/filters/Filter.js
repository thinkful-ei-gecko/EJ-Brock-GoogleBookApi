import React from 'react'
import './Filter.css'

export default function Filter(props){

    let state = {
        filteredOption: props.filteredOption
    }

    let key =  'AIzaSyByEcdZDlX9IZvKTIysQwKXkYnCIoRBmCw'

    function handleChange(event){
        state.filteredOption = event.target.value
        let url = `https://www.googleapis.com/books/v1/volumes?q=${props.searchTerm}&filter=${state.filteredOption}&key=${key}`
        console.log('handleChange: ' + url)
        props.fetch(url)
        props.change(state.filteredOption)
    }

    return (
        
          <label>Print Type: 
          <select className="spacing" value = {state.filteredOption} onChange={handleChange}>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="free-ebooks">Free-eBooks</option>
            <option value="paid-ebooks">Paid-eBooks</option>
            <option value="ebooks">eBooks</option>
        </select>
        </label>
    )
    
}