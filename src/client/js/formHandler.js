function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let text = document.getElementById('name').value

    Client.checkText(text);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/analyse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text}),
    })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = JSON.stringify(res);
        });
}

export { handleSubmit }
