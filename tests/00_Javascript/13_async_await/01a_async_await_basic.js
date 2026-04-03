// This function fetches a post title from a REST API.
// It uses async/await syntax for cleaner asynchronous code handling.

async function getPostTitle() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Post Title:", data.title);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getPostTitle();


// getPostTitle() function is declared with the async keyword, allowing the use of await inside it.
// await is used to pause execution until the fetch() Promise resolves.
// await response.json() is used to wait for the JSON conversion.
// try...catch handles errors gracefully.