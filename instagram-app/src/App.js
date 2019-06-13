import React, { Component }from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
   constructor() {
     super();
     this.state = {
       posts: dummyData
     };
   }
   render() {
     return (
       <div className='App'>
       <SearchBar />
       </div>
     );
   }
}

export default App;
