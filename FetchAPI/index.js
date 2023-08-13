// Fetch API

const url = "https://jsonplaceholder.typicode.com/posts";

// Fetch Data
fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    });
