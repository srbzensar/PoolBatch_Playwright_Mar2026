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







