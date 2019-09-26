async function addTodo(todo) {
    let res = await fetch('/todos/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    res = await res.json();

    return res;
}

export default addTodo