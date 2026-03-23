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




