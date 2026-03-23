import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { parse } from 'csv-parse/sync'; 
// install library using following command: npm install csv-parse

test.describe('Data-Driven POST Requests using CSV', () => {

    // Read CSV file and parse into objects
    const filePath = 'files/postsData.csv';
    const csvContent = fs.readFileSync(filePath, 'utf-8');

    const records = parse(csvContent, {
        columns: true, // Use first row as keys
        skip_empty_lines: true
    });

    // Define headers separately
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };

    // Create separate test for each record 
    for (const record of records) {
        test(`Create Post for userId ${record.userId}`, async ({ request }) => {

            const url = 'https://jsonplaceholder.typicode.com/posts';

            // Send POST request
            const response = await request.post(url, {
                data: record,
                headers: headers
            });

            // Validate status code
            expect(response.status()).toBe(201);

            // Parse JSON response
            const jsonData = await response.json();
            console.log(`Response for userId ${record.userId}:`, jsonData);

            // Validate response fields
            expect(jsonData.title).toBe(record.title);
            expect(jsonData.body).toBe(record.body);
            expect(jsonData.userId).toBe(record.userId); 
            expect(typeof jsonData.id).toBe('number'); // Validate id type
        });
    }
});


