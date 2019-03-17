import React, { Component } from 'react';
import CreatePost from './containers/CreatePost'
import './App.css';
import PostList from './containers/PostList';
import CreateIncome from './containers/CreateIncome';
import IncomesList from './containers/IncomesList';

 
class App extends Component {
  render() {
    return (
      <div className="App">
<div><CreatePost /></div>
 <div><PostList /></div>
        <div><CreateIncome /></div>
        <div><IncomesList /></div>
      </div>
    );
  }
}

export default App;
