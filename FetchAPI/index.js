// api endpoint
const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

// select DOM element
const getBtn = document.getElementById("getPost");
const createBtn = document.getElementById("createPost");
const tableEl = document.querySelector("#table");

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
const createPost = async (createPost) => {
    try {
        const res = await fetch(apiEndPoint, {
            method: "POST",
            body: JSON.stringify(createPost),
            headers: {
                "Content-Type": "application/json: charset=UTF-8",
            },
        });
        if (res.status !== 200) {
            throw new Error("something wrong!");
        }
        const newPost = await res.json();
        return newPost;
    } catch (error) {
        console.log(error);
    }
};

createBtn.addEventListener("click", async () => {
    const newPost = {
        title: "Pradip Title",
        body: "new post body",
        userId: 1,
    };
    const createdPost = await createPost(newPost);
    console.log(createdPost);
});
