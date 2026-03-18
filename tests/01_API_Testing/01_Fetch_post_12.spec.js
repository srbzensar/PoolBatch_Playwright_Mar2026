import { test, expect } from "@playwright/test";


test("fetch single post - id 12", async ({ request }) => {

    const url = "https://jsonplaceholder.typicode.com/posts/12";

    // Send a GET request
    const response = await request.get(url);

    console.log("Response", response);

    // Assert the response status
    expect(response.status()).toBe(200);

    // json response (deserialization)
    const postData = await response.json();
    console.log(postData);
   
        // Assert the response body
    expect(postData.id).toBe(12);
    expect(postData.userId).toBe(2);
    expect(postData.title).toBe("in quibusdam tempore odit est dolorem");
    expect(postData.body).toBeTruthy(); // ensure that body exists
    
    // validate headers
    const headers = response.headers();
    expect(headers["content-type"]).toContain("application/json; charset=utf-8");
    expect(headers).toHaveProperty("content-type"); // check if content-type header exists
    expect(headers).toHaveProperty("content-type", "application/json; charset=utf-8"); // check if content-type header has the expected value

});

test.skip("fetch non-existent post - id 101", async ({ request }) => {

    const url = "https://jsonplaceholder.typicode.com/posts/101";

    // Send a GET request
    const response = await request.get(url);

    // Assert the response status
    expect(response.status()).toBe(404);
});
