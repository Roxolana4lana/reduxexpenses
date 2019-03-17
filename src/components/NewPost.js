import React, { Component } from 'react'

export default class NewPost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            category: '',
            amount: ''
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        //trim remove white space
        if (this.state.title.trim() && this.state.category.trim() && this.state.amount.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };
    handleReset = () =>{
        this.setState({
            title:'',
            category:'',
            amount:''
        })
    }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
            <input type='text'
                        placeholder="Title"
                        className="form-control"
                        name="title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                    />
        </div>
                <div>
                    <input type='text'
                        placeholder="category"
                        className="form-control"
                        name="category"
                        onChange={this.handleInputChange}
                        value={this.state.category}
                    />
                </div>
                <div>
                    <input type='text'
                        placeholder="Amount"
                        className="form-control"
                        name="amount"
                        onChange={this.handleInputChange}
                        value={this.state.amount}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add Post</button>
                    <button type="button" className="btn btn-warning" onClick={this.handleReset}>
                        Reset
            </button>
                </div>
      </form>
        
      </div>
    )
  }
}
