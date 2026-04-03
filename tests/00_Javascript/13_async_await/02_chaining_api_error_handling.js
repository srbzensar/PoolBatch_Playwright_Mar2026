// Example: same logic as promise chaining but using async/await with proper error handling.

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} -> ${response.status} ${response.statusText}`);
  return response.json();
}

async function fetchPostAndAuthor(postId) {
  try {
    const post = await fetchJson(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log('Post Title:', post.title);
    console.log('User Id:', post.userId);

    const user = await fetchJson(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    console.log('Author Name:', user.name);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Demo:
// This will produce an error because post 101 doesn't exist.
fetchPostAndAuthor(101);

// Uncomment to test successful flow:
// fetchPostAndAuthor(12);

// Explanation:
// 1. The fetchJson function is an async function that fetches a URL and checks for errors.
// Note: fetch() method returns a Promise that resolves to a Response object.
// 2. The fetchPostAndAuthor function is also async and uses await to handle asynchronous calls sequentially.
// 3. Each await pauses execution until the Promise resolves, making the code easier to read.
// 4. A try...catch block is used to handle any errors that may occur during the fetch operations.

// As compared to promise chaining version, the advantages are:
// 1. Cleaner and more readable code without multiple .then() calls.
// 2. Easier to follow the sequential flow of asynchronous operations.