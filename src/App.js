import React, {Component} from 'react';
import './App.css';
import Search from './filters/Search_Entry'

class App extends Component {

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="google_Banner">
          <h2>Google Book Search</h2>
        </div>
      </header>
        <Search />
    </div>
    )
  };
}

export default App;
