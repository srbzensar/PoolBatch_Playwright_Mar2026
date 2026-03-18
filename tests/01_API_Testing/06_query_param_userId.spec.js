import { test, expect } from '@playwright/test';

test('Fetch Posts by UserId and Validate Array Count & First ID', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const queryParams = { userId: 3 };

    // Send GET request with query parameters
    const response = await request.get(url, {
        params: queryParams
    });

    // Validate status code
    expect(response.status()).toBe(200);

    // Parse JSON response
    const jsonData = await response.json();
    console.log('Response JSON:', jsonData);

    expect(jsonData.length).toBeGreaterThan(0); // Ensure response is not empty
    expect(jsonData.length).toBe(10); // Count should be 10
    expect(jsonData[0].id).toBe(21);  // First post's id should be 21

    // Validate that all posts belong to userId = 3
    for (const post of jsonData) {
        expect(post.userId).toBe(3);
    }
});





/*
Notes:
    1. Response array length is 10.
    2. First element's id is 21.
- These checks ensure data integrity for filtered results.

Assignments:
1. Change `userId` to 4 and validate:
    - Response length is 10.
    - First id is 31.
2. Add an assertion that every post has a non-empty `title`.
3. Print only the `id` values of all posts.

Quiz:
Q1. How do you access the first element of a JSON array in Playwright?
A. jsonData.first()
B. jsonData[0]
C. jsonData.get(0)
D. jsonData.firstElement()
Correct Answer: B
Explanation: Arrays in JavaScript are zero-indexed, so `jsonData[0]` gives the first element.

Q2. Which assertion checks the length of an array in Playwright tests?
A. expect(jsonData.size()).toBe(10)
B. expect(jsonData.length).toBe(10)
C. expect(jsonData.count()).toBe(10)
D. expect(jsonData.length()).toBe(10)
Correct Answer: B
Explanation: Use `.length` property to check array size.

Interview Questions:
Q1. Why is it important to validate array length in API tests?
Answer: It ensures the API returns the expected number of records for given filters, preventing data loss or incorrect filtering.

Q2. How do you handle dynamic data in API tests?
Answer: Use flexible assertions like `toBeGreaterThan(0)` or validate schema instead of hardcoding values.
*/
