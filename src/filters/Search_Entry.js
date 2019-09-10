import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        inputValue: '',
        books: [],
        error: null
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('submitted: ' + this.state.inputValue)
        const search = this.state.inputValue
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`
        console.log(url)
        
        this.setState({
            inputValue: ''
        })

        this.fetch(url)
    }

    fetch = (url) => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error('Something went wrong, please try again')
            }
            return res;
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                books: data,
                error: null
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        });
    }

    printBooks = () => {
    let allBooks = this.state.books
    return allBooks
}

    render(){
        console.log(this.state)
        console.log(this.printBooks())
    return (
        <section>
        <form onSubmit={e => this.submitHandler(e)}>
            <div className="search_Entry">
                <label>Search:</label>
                <input placeholder="Harry Potter" type="text" value={this.state.inputValue}
                onChange={this.updateInputValue} required></input>
                <button type="submit">Search</button>
            </div>
        </form>
        </section>
        )
    }

    updateInputValue = (evt) => {
        evt.preventDefault();
        this.setState({
            inputValue: evt.target.value
        })
        console.log(this.state.inputValue);
    }

}