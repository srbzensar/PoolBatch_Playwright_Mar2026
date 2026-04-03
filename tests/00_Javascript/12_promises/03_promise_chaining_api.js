// Chaining Promises means linking multiple .then() calls together so that each one runs after the previous one completes.
// This is useful when:
// You want to perform multiple asynchronous operations in sequence.
// Each step depends on the result of the previous one.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // Convert response to JSON
  .then(post => {
    console.log("Post Title:", post.title);
    return fetch("https://jsonplaceholder.typicode.com/users/" + post.userId);
  })
  .then(response => response.json()) // Get user info
  .then(user => {
    console.log("Author Name:", user.name);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
  
// Output:
// Post Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// Author Name: Leanne Graham

// Execution Flow Explanation:
// 1. The first fetch gets a post and converts it to JSON.
// 2. The second .then() logs the post title and returns a new fetch to get the user info based on data.userId.
// 3. The next .then() converts the user response to JSON.
// 4. The final .then() logs the author's name.
// 5. The .catch() at the end handles any errors that occur in any of the previous steps.