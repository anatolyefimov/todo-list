import React from 'react'

import './ToDoList.css'

import ToDo from 'components/ToDo'

function ToDoList(props) {
    const toDoList = props.list.map((toDo) => (
        <ToDo text={toDo.text}/>
    ));

    return (
        <ul>
            {toDoList}
        </ul>
    );
}

export default ToDoList;