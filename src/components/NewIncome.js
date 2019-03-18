import React, { Component } from 'react'

export default class NewIncome extends Component {
    constructor() {
        super()
        this.state = {
            from_where: '',
            amount: '',
            from_whereError:'',
            amountError:''
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Validation = () => {
        let from_whereError=''
        let amountError=''
        if(!this.state.from_where || this.state.from_where.length < 3){
            from_whereError='minimum 3 characters'
        }
        if(!this.state.amount || isNaN(this.state.amount)){
            amountError='only numbers'
        }
        if(from_whereError || amountError){
            this.setState({
                from_whereError,
                amountError
            })
            return false
        } else{
            return true
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        if(this.Validation()){
        if (this.state.from_where && this.state.amount) {
            this.props.onAddIncome(this.state)
            this.handleReset()
        }
    }else{
        console.log('not valid input')
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
                <form onSubmit={this.handleSubmit} className='formExpenses'>
                    <div className="form-group">
                        <input type='text'
                            placeholder='source'
                            name='from_where'
                            onChange={this.handleInputChange}
                            value={this.state.from_where}
                            className="form-control"
                        />
                    </div>
                    <div className='errorMessage'><div>{this.state.from_whereError}</div></div>
                    <div className="form-group">
                        <input type='text'
                            placeholder='amount'
                            name='amount'
                            onChange={this.handleInputChange}
                            value={this.state.amount}
                            className="form-control"
                        />
                    </div>
                    <div className='errorMessage'><div>{this.state.amountError}</div></div>
                    <div className="form-group">
                        <button type="submit" className="btn-save">Add Post</button>
                        <button type="button" className="btn-save" onClick={this.handleReset}>
                            Reset
            </button>
                    </div>
                </form>
            </div>
        )
    }
}
