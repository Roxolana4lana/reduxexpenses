import React, { Component } from "react";
import PostList from "./containers/PostList";
import IncomesList from "./containers/IncomesList";
import { Route, BrowserRouter } from "react-router-dom";
import "./style/output.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="AppMain">
          <Route exact path="/" component={PostList} />
          <Route exact path="/incomes" component={IncomesList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
