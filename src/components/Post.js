import React from 'react';



export default ({ post: { title, category,amount,id}, onDelete }) => {
    return (
        <div className='myBox'>
        <div className="boxInfo">
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{amount}</p>
            </div>
            <i className="material-icons" 
                onClick={() => onDelete(id)}>delete</i>
            
        </div>
    );
};