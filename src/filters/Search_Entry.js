import React, { Component } from 'react'
import Result from './Result.js'
import Filter from './Filter.js'
import Bookfilter from './Bookfilter.js'
import './Search_Entry.css'

export default class Search extends Component {

    state = {
        inputValue: '',
        books: [],
        filterOption: '',
        bookOption: '',
        error: null
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('submitted: ' + this.state.inputValue)
        const search = this.state.inputValue
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`
        console.log(url)

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

    changeFilterOption = (option) => {
        this.setState({
            bookOption: ''
        })

        return this.setState({
            filterOption: option
        })
    }

    changeBookOption = (option) => {
        this.setState({
            filterOption: ''
        })

        return this.setState({
            bookOption: option
        })
    }

    render(){
    return (
        <div>
        <section className="filterBar">
        <Filter 
        searchTerm={this.state.inputValue}
        fetch={this.fetch}
        filterOption={this.state.filterOption}
        change={this.changeFilterOption}/>
        <Bookfilter 
        searchTerm={this.state.inputValue}
        fetch={this.fetch}
        bookFilter={this.state.bookOption}
        change={this.changeBookOption}
        />
        </section>
        <section className="searching">
            <form onSubmit={e => this.submitHandler(e)}>
            <div className="search_Entry">
                <label>Search:</label>
                <input placeholder="Harry Potter" type="text" value={this.state.inputValue}
                onChange={this.updateInputValue} required></input>
                <button type="submit">Search</button>
            </div>
            </form>
        </section>
        <section>
            <div>
                <Result 
                books = {this.state.books}/>
            </div>
        </section>
        </div>
    )
    }

    updateInputValue = (evt) => {
        evt.preventDefault();
        this.setState({
            inputValue: evt.target.value
        })
        //console.log(this.state.inputValue);
    }
}