import React, { Component } from 'react'
import { connect } from 'react-redux'
import Income from '../components/Income'
import { deleteIncome } from '../actions'

function IncomeList({ incomes, onDelete }) {
    if (!incomes.length) {
        return (
            <div>
                Noposts</div>
        )
    }


    return (
        <div>
            {incomes.map(income => {
                return (
                    <Income income={income} onDelete={onDelete} key={income.id} />
                )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        incomes: state.incomes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteIncome(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList)
