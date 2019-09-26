async function fetchTodos() {
    let res = await fetch('/todos/eject');
    res = await res.json();
    res = res.map(todo => (
        {
            pk: todo.pk,
            text: todo.fields.text,
            isDone: todo.fields.is_done,
        }
    ));

    return res;
}

export default fetchTodos;
