import { test, expect } from '@playwright/test';

test('Partially Update Post with ID 12 using PATCH and Validate Full Object', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts/12';

    // Prepare partial payload (only title)
    const partialPayload = {
        title: 'Partially Updated Title via PATCH'
    };

    // Define headers separately
    const headersVar = {
        'Content-type': 'application/json; charset=UTF-8'
    };

    // Send PATCH request
    const response = await request.patch(url, {
        data: partialPayload,
        headers: headersVar
    });

    // Validate status code
    expect(response.status()).toBe(200);

    // Parse JSON response
    const jsonData = await response.json();
    console.log('PATCH Response:', jsonData);

    // ✅ Validate updated title
    expect(jsonData.title).toBe(partialPayload.title);

    // ✅ Validate other fields are still present
    expect(jsonData.id).toBe(12);
    expect(jsonData.body).toBeTruthy(); // Body should still exist
    expect(jsonData.userId).toBe(2); // userId with value 2
});









/*
Notes:
- PATCH updates only specified fields but keeps other fields intact.
- JSONPlaceholder returns the full object with updated fields.
- We validate that title is updated and other fields remain present.

Assignments:
1. Try sending only `body` in the payload and validate that `title` and `userId` are still present.
2. Add an assertion that `Object.keys(jsonData)` contains `['id', 'title', 'body', 'userId']`.
3. Print all keys present in the response using `Object.keys(jsonData)`.

Quiz:
Q1. Which method updates only specified fields without replacing the entire resource?
A. PUT
B. PATCH
C. POST
D. DELETE
Correct Answer: B
Explanation: PATCH updates partial data while keeping other fields intact.

Interview Questions:
Q1. How does PATCH differ from PUT in terms of behavior?
Answer: PUT replaces the entire resource, while PATCH updates only specified fields and retains others.
*/