import React from 'react';


export default ({ income: { from_where, amount, id }, onDelete }) => {
    return (
        <div className='myBox'>
            <div className="boxInfo">
            <h2>{from_where}</h2>
            <p>Amount: {amount}</p>
            </div>
            <i className="material-icons"
            onClick={() => onDelete(id)}>delete</i>
        </div>
    )
}