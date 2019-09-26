async function deleteTodo(pk) {
    let res = await fetch('/todos/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pk)
    })

    res = await res.json();
    return res;
}

export default deleteTodo;