import { test, expect } from '@playwright/test';

test.skip('Update Post with ID 12 and Validate Response', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts/12';

    // Prepare updated payload
    const updatedPayload = {
        id: 12,
        title: 'Updated Post Title',
        body: 'This post has been updated using Playwright PUT request',
        userId: 2
    };

    
    // Define headers separately
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };

    // Send PUT request
    const response = await request.put(url, {
        data: updatedPayload,
        headers: headers
    });

    // Validate status code
    expect(response.status()).toBe(200);

    // Parse JSON response
    const jsonData = await response.json();
    console.log('Updated Response JSON:', jsonData);

    // Validate updated fields
    expect(jsonData.id).toBe(12);
    expect(jsonData.title).toBe(updatedPayload.title);
    expect(jsonData.body).toBe(updatedPayload.body);
    expect(jsonData.userId).toBe(updatedPayload.userId);
});



test('Put method - partial data', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts/12';

    // Prepare updated payload
    const updatedPayload = {
        id: 12,
        title: 'Updated Post Title'
    };

    
    // Define headers separately
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };

    // Send PUT request
    const response = await request.put(url, {
        data: updatedPayload,
        headers: headers
    });

    // Validate status code
    expect(response.status()).toBe(200);

    // Parse JSON response
    const jsonData = await response.json();
    console.log('Updated Response JSON:', jsonData);

    // Validate updated fields
    expect(jsonData.id).toBe(12);
    expect(jsonData.title).toBe(updatedPayload.title);

    
    // Validate that body and userId are NOT present
    expect(jsonData.body).toBeUndefined();
    expect(jsonData.userId).toBeUndefined();
});









/*
Notes:
- PUT request replaces the entire resource with the provided payload.
- JSONPlaceholder returns the updated object (mock behavior).
- We validate status code and all updated fields.

Assignments:
1. Change the title and body to your own values and validate them.
2. Add an assertion that `typeof jsonData` is 'object'.
3. Print only the `title` and `body` from the response.

Quiz:
Q1. Which HTTP method is used to completely replace a resource?
A. POST
B. PUT
C. PATCH
D. DELETE
Correct Answer: B
Explanation: PUT replaces the entire resource, while PATCH updates partially.

Q2. How do you send data in a PUT request using Playwright?
A. request.put(url, payload)
B. request.put(url, { data: payload })
C. request.put(url, { body: payload })
D. request.put(url, { json: payload })
Correct Answer: B
Explanation: Playwright uses `{ data: payload }` for request body in PUT.

Q3. Which assertion checks if a property is missing in Playwright tests?
A. expect(value).toBeNull()
B. expect(value).toBeUndefined()
C. expect(value).toEqual({})
D. expect(value).not.toBeDefined()
Correct Answer: B
Explanation: `toBeUndefined()` is used when a property is not present.

Interview Questions:
Q1. What happens if you send partial data in a PUT request?
Answer: Ideally, PUT should replace the entire resource, but some APIs treat it like PATCH and keep missing fields undefined or unchanged.

Q2. How do you validate missing fields in API response?
Answer: Use assertions like `expect(field).toBeUndefined()` or check keys using `Object.keys()`.

Q3. What is the difference between PUT and PATCH?
Answer: PUT replaces the entire resource, while PATCH updates only specified fields.

Q4. How would you validate that the update was successful in a real API?
Answer: Send a GET request for the same resource and compare updated fields.
*/