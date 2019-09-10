import React, {Component} from 'react';
import './App.css';
import Filter from './filters/Filter'
import Search from './filters/Search_Entry'

class App extends Component {

  key = 'AIzaSyByEcdZDlX9IZvKTIysQwKXkYnCIoRBmCw'
  printType = '';
  filterType = '';

  searchKey = (searchKey) => {
    return searchKey;
  }

  searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerms}`
  printUrl = `https://www.googleapis.com/books/v1/volumes?q=time&printType=${this.printType}&key=${this.key}`
  filterUrl = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=${this.filterType}&key=${this.key}`

  render() {
  console.log(this.searchUrl);
  console.log(this.printUrl);
  console.log(this.filterUrl);
  return (
    <div className="App">
      <header className="App-header">
        <div className="google_Bannner">
          <h2>Google Book Search</h2>
        </div>
        <Search />
        <Filter />
      </header>
    </div>
    )
  };
}

export default App;
