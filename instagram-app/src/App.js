import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import PostHeader from './Components/PostContainer/PostHeader'


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
       <PostContainer  />
       <PostHeader />
       </div>
     );
   }
}

export default App;
