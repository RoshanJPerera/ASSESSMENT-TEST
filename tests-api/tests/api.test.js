import { test, expect } from '@playwright/test';
import 'dotenv/config';

// Method 1
const BaseUrl = process.env.Base_Url;
let addedObjectId;

test.describe('Restful API Test', () => {

    // GET All Objects
    test('Get all objects from API', async ({ request }) => {
        const response = await request.get(BaseUrl);

        console.log(`Response Status: ${response.status()}`);
        expect(response.status()).toBe(200);

        const objects = await response.json();
        console.log(`Response Data:`, objects);

        expect(Array.isArray(objects)).toBe(true);
        expect(objects.length).toBeGreaterThan(0); 
    });

    // Create New Object
    test('Add a new object using POST', async ({ request }) => {
    const newObject = {
        "name": 'Test data MacBook Pro 16',
        "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "test data",
        "Hard disk size": "1 TB"
        }
    };

    const response = await request.post(BaseUrl, {
        data: newObject
    });
    console.log(`JSON POST Request:`,newObject );

    console.log(`Response Status: ${response.status()}`);

    expect([200, 201]).toContain(response.status());
    const body = await response.json();

    console.log("Response Body:", body);

    expect(body).toHaveProperty('id');
    
    addedObjectId = body.id;
    console.log(`New POST Object ID: ${addedObjectId}`);
    });

    // Update Object
    test('Update added data using PUT', async ({ request }) => {
        expect(addedObjectId).toBeDefined();

        const updateObject = {
            name: 'Updated Test data MacBook Pro 16',
            data: {
            "year": 2026,
            "price": 1885.99,
            "CPU model": "Updated test data",
            "Hard disk size": "1 TB"
            }
        };

        const response = await request.put(`${BaseUrl}/${addedObjectId}`, {
            data: updateObject
        });

        expect(response.status()).toBe(200);
        const object = await response.json();
        console.log(`Updated Object Response:`, object);
        expect(object.name).toBe(updateObject.name);
    });

    // Get Object by ID
    test('Get by ID', async ({ request }) => {
        expect(addedObjectId).toBeDefined();

        const response = await request.get(`${BaseUrl}/${addedObjectId}`);

        expect(response.status()).toBe(200);
        const object = await response.json();

        console.log('Get by ID response:', object)
    });

    // Delete a Object
    test('Delete added object using DELETE', async ({ request }) => {
        expect(addedObjectId).toBeDefined();

        const response = await request.delete(`${BaseUrl}/${addedObjectId}`);
        expect(response.status()).toBe(200);

        const getResponse = await request.get(`${BaseUrl}/${addedObjectId}`);
        expect(getResponse.status()).toBe(404);
        console.log(`Response status:`, getResponse);
    });
});
