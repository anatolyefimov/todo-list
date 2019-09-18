import React from 'react'

import './ToDoList.css'

import ToDo from 'components/ToDo'

function ToDoList(props) {
    const toDoList = props.list.map((toDo, ind) => (
        <ToDo key={ind} id={ind} data={toDo} handleDelete={props.handleDelete} handleStatusChange={props.handleStatusChange}/>
    ));

    return (
        <ul>
            {toDoList}
        </ul>
    );
}

export default ToDoList;