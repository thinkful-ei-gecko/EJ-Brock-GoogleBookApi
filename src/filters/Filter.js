import React from 'react'

export default function filter(){
    return (
        <div className="filter">
          <label>Print Type: </label>
          <select name="" id="">
            <option value="">All</option>
            <option value="">books</option>
            <option value="">magazines</option>
        </select>
          <label>Book Type: </label>
          <select>
            <option>partial</option>
            <option>full</option>
            <option>free-ebooks</option>
            <option>paid-ebooks</option>
            <option>ebooks</option>
          </select>
        </div>
    )
}