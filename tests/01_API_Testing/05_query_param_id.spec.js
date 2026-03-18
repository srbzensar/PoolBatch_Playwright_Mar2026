import { test, expect } from '@playwright/test';

test.skip('Query Parameter: fetch post 12', async ({ request }) => {
    
    // const url = 'https://jsonplaceholder.typicode.com/posts?id=12'; // query parameter in URL
    
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const queryParams = { id: 12 };

    // Send GET request with query parameters
    const response = await request.get(url, { params: queryParams });

    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);

    const jsonData = await response.json();
    console.log('Parsed JSON:', jsonData);

    expect(jsonData.length).toBe(1);

    // jsonData will be an array because filter returns multiple posts
    expect(jsonData[0].id).toBe(12);
    expect(jsonData[0].userId).toBe(2);
    expect(jsonData[0].title).toBeTruthy();
});


test.skip('Query Parameter: fetch post 12, 15 in url', async ({ request }) => {
    
    const url = 'https://jsonplaceholder.typicode.com/posts?id=12&id=15'; // query parameter in URL
    
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    // const queryParams = { id: 12 };

    // Send GET request with query parameters
    const response = await request.get(url);
    // const response = await request.get(url, { params: queryParams });

    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);

    const jsonData = await response.json();
    console.log('Parsed JSON:', jsonData);

    expect(jsonData.length).toBe(2);

    // jsonData will be an array because filter returns multiple posts
    expect(jsonData[0].id).toBe(12);
    expect(jsonData[0].userId).toBe(2);
    expect(jsonData[0].title).toBeTruthy();
});

test('Query Parameter: fetch post 12, 15 in params', async ({ request }) => {
    
    // const url = 'https://jsonplaceholder.typicode.com/posts?id=12&id=15'; // query parameter in URL
    
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // URLSearchParams can be used to construct query parameters with multiple values for the same key.
    // const queryParams = new URLSearchParams([['id', '12'], ['id', '15']]); // query parameters using URLSearchParams
    const queryParams = new URLSearchParams("id=12&id=15"); // query parameters using URLSearchParams

    // Send GET request with query parameters
    const response = await request.get(url, { params: queryParams });

    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);

    const jsonData = await response.json();
    console.log('Parsed JSON:', jsonData);

    expect(jsonData.length).toBe(2);

    // jsonData will be an array because filter returns multiple posts
    expect(jsonData[0].id).toBe(12);
    expect(jsonData[0].userId).toBe(2);
    expect(jsonData[0].title).toBeTruthy();
});

