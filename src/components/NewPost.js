import React, { Component } from "react";

export default class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      category: "",
      amount: "",

      titleError: "",
      categoryError: "",
      amountError: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  Validate = () => {
    let titleError = "";
    let categoryError = "";
    let amountError = "";

    if (!this.state.title || this.state.title.length < 3) {
      titleError = "minimum 3 characters";
    }
    if (!this.state.category || this.state.category.length < 3) {
      categoryError = "minimum 3 characters";
    }
    if (!this.state.amount || isNaN(this.state.amount)) {
      amountError = "only numbers";
    }
    if (titleError || categoryError || amountError) {
      this.setState({
        titleError,
        categoryError,
        amountError
      });
      return false;
    } else {
      return true;
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.Validate()) {
      if (
        this.state.title.trim() &&
        this.state.category.trim() &&
        this.state.amount.trim()
      ) {
        this.props.onAddPost(this.state);
        this.handleReset();
      }
    } else {
      console.log("Not valid properties");
    }
  };
  handleReset = () => {
    this.setState({
      title: "",
      category: "",
      amount: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="formExpenses">
          <div className="form-group">
            <input
              type="text"
              placeholder="title"
              className="form-control"
              name="title"
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className="errorMessage">
            <div>{this.state.titleError}</div>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="category"
              className="form-control"
              name="category"
              onChange={this.handleInputChange}
              value={this.state.category}
            />
          </div>
          <div className="errorMessage">
            <div>{this.state.categoryError}</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="amount"
              className="form-control"
              name="amount"
              onChange={this.handleInputChange}
              value={this.state.amount}
            />
          </div>
          <div className="errorMessage">
            <div>{this.state.amountError}</div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn-save">
              Add Post
            </button>
            <button
              type="button"
              className="btn-save"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
