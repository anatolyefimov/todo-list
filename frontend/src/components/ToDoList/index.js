import React from 'react'

import './ToDoList.css'

import ToDo from 'components/ToDo'

function ToDoList(props) {
    const toDoList = props.list.map((toDo, ind) => (
        <ToDo 
            key={toDo.pk} 
            ind={ind} 
            data={toDo} 
            handleDelete={props.handleDelete} 
            handleStatusChange={props.handleStatusChange}
        />
    ));

    return (
        <ul>
            {toDoList}
        </ul>
    );
}

export default ToDoList;