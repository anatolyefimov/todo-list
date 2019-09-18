import React from 'react'

import './ToDo.css'

function ToDo(props) {
    const classes = `ToDo ${props.data.isDone ? 'is-done' : ''}`

    return (
    <li id={props.id} onClick={props.handleStatusChange}>
        <div className={classes}>
            { props.data.text } 
        </div>
        <button onClick={props.handleDelete}>✕</button>
    </li>);
}

export default ToDo;