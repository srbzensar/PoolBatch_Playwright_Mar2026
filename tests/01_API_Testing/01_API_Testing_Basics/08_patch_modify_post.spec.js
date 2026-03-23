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



