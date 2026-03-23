import { test, expect } from '@playwright/test';

test('Create new post and Validate Response_hard coded data', async ({ request }) => {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Prepare updated payload
    const bodyDataPayload = {
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
    const response = await request.post(url, {
        data: bodyDataPayload,
        headers: headers
    });

    // Validate status code
    expect(response.status()).toBe(201);

    // Parse JSON response
    const jsonData = await response.json();
    console.log('Updated Response JSON:', jsonData);

    // Validate updated fields
    expect(jsonData.id).toBe(101);
    expect(jsonData.title).toBe(bodyDataPayload.title);
    expect(jsonData.body).toBe(bodyDataPayload.body);
    expect(jsonData.userId).toBe(bodyDataPayload.userId);
});








