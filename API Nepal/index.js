const TOKEN = "nMjyKOy-1ow8B-sagNuPxIQ1";

async function logMovies() {
    const response = await fetch(
        "https://nepallocation.com.np/api/v1/district/list",
        {
            method: "get",
            headers: new Headers({
                Authorization: "Bearer " + TOKEN,
                "Content-Type": "application/json",
            }),
        }
    );
    const movies = await response.json();
    console.log(movies);
}

logMovies();
