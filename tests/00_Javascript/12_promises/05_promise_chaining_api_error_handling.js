// set to 12 to test success case, set to 101 to test error case
const POST_ID = 101; 

const fetchJson = url =>
  fetch(url).then(res => {
    if (!res.ok) throw new Error(`${url} -> ${res.status} ${res.statusText}`);
    return res.json();
  });

fetchJson(`https://jsonplaceholder.typicode.com/posts/${POST_ID}`)
  .then(post => {
    console.log("Post Title:", post.title);
    console.log("User Id:", post.userId);
    return fetchJson(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  })
  .then(user => {
    console.log("Author Name:", user.name);
  })
  .catch(err => {
    console.error("Error:", err.message);
  });

// Explanation:
// Chaining Promises means linking multiple .then() calls together so that each one runs after the previous one completes.
// This is useful when:
// You want to perform multiple asynchronous operations in sequence.
// Each step depends on the result of the previous one.

// As compared to async/await version, the challenges are:
// 1. More boilerplate code with multiple .then() calls.
// 2. The code can become less readable with deeper nesting of .then() calls.