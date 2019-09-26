async function statusChange(pk) {
    let res = await fetch('/todos/statuschange', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pk)
    })

    res = await res.json();
    return res;
}

export default statusChange;