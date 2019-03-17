import React, { Component } from 'react'

export default class NewIncome extends Component {
    constructor() {
        super()
        this.state = {
            from_where: '',
            amount: ''
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.from_where && this.state.amount) {
            this.props.onAddIncome(this.state)
            this.handleReset()
        }
    }
    handleReset = () => {
        this.setState({
            from_where: '',
            amount: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text'
                            placeholder='from_where'
                            name='from_where'
                            onChange={this.handleInputChange}
                            value={this.state.from_where}
                        />
                    </div>
                    <div>
                        <input type='text'
                            placeholder='amount'
                            name='amount'
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
