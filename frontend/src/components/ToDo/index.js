import React from 'react'

import './ToDo.css'

function ToDo(props) {
    return <li className="ToDo">{ props.text }</li>
}

export default ToDo;