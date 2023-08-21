// api endpoint
const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

// select DOM element
const getBtn = document.getElementById("getPost");
const createBtn = document.getElementById("createPost");
const tableEl = document.querySelector("#table");
const formEl = document.querySelector("#form");

// get posts
// function getPosts() {
//     fetch(apiEndPoint).then((response) =>
//         response.json().then((data) => console.log(data))
//     );
// }

const getPosts = async () => {
    try {
        const response = await fetch(apiEndPoint);
        console.log(response.ok);
        if (response.status !== 200) {
            throw new Error(response.message);
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
    }
};

getBtn.addEventListener("click", async () => {
    const posts = await getPosts();
    console.log(posts);
    const table = `
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        ${posts
                            .map(
                                (post) =>
                                    `
                            <tr>
                                <th scope="row">${post.id}</th>
                                <td>${post.title}</td>
                            </tr>
                            `
                            )
                            .join("\n")}
                        
                        </tbody>
                    </table>
                `;

    tableEl.innerHTML = table;
});

// Create Post

// const createPost = async (data) => {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts",
//             {
//                 // Adding method type
//                 method: "POST",
//                 // Adding body or contents to send
//                 body: JSON.stringify(data),
//                 // Adding headers to the request
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//             }
//         );

//         // Converting to JSON
//         const postData = await response.json();

//         // Displaying results to console
//         return postData;
//     } catch (error) {
//         console.log(error);
//     }
// };

// createBtn.addEventListener("click", async () => {
//     const data = {
//         title: "foo",
//         body: "bar",
//         userId: 1,
//     };
//     const createdPost = await createPost(data);
//     console.log(createdPost);
// });

fetch(apiEndPoint, {
    method: "POST",
    body: JSON.stringify({
        title: "Hello World",
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers.get("content-type"));
        return response.json();
    })
    .then((resData) => {
        console.log(resData);
    });
