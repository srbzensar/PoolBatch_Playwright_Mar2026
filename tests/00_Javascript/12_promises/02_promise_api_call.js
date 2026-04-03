// Making an API call using Fetch API and handling the promise
// Fetch API returns a promise
// We use .then() to handle the resolved promise and .catch() for errors


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert response to JSON
  })
  .then(data => {
    console.log("Post Title:", data.title);
  })
  .catch(error => {
    console.error("Fetch error:", error.message);
  });

