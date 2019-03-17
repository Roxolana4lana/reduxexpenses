import React, { Component } from 'react';
import CreatePost from './containers/CreatePost'
import PostList from './containers/PostList';
import CreateIncome from './containers/CreateIncome';
import IncomesList from './containers/IncomesList';
import { Route, BrowserRouter } from 'react-router-dom';
import './style/output.css'
import Navbar from './components/Navbar';
// <div><CreatePost /></div>
//   <div><PostList /></div>
//   <div><CreateIncome /></div>
//   <div><IncomesList /></div>
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <div className="AppMain">
        
          <Route exact path='/' component={PostList}></Route>
          <Route exact path='/incomes' component={IncomesList}></Route>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
