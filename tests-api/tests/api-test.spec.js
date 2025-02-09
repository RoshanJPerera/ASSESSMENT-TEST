import {test, expect} from '@playwright/test';
import { apiUtils } from '../utils/api-utils';

//Method 2
let addedObjectId;

test.describe('Restful API Test Suite', () => {

    // 1) Get All Objects using get API
    test('1) ___ Get all objects ___ ', async ({ request }) => {
        const response = await apiUtils.getAllObject(request);

        console.log(`Response status: ${response.status()}`);

        expect(response.status()).toBe(200);
        const objects = await response.json();
        console.log(`Response Data:`, objects);

        expect(Array.isArray(objects)).toBe(true);
        expect(objects.length).toBeGreaterThan(0);
    });

    // 2) Create a New Object using POST API
    test('2) ___ Create a new object ___ ', async ({ request }) => {
        const newObject = { 
            name: 'Test New Object One',
            data: {
                year: 2019,
                price: 2325.23,
                Description: 'This is newly created object for testing'

            }
        };

        const response = await apiUtils.createObject(request, newObject);
        console.log(`JSON Post Data ____ :`, newObject);

        console.log(`Response Status ____ : ${response.status()}`);
        expect([200, 201]).toContain(response.status());

        const body = await response.json();
        console.log('Response Body ____ :', body);

        expect(body).toHaveProperty('id');
        addedObjectId = body.id;
        console.log(`Newly Create object ID ____ : ${addedObjectId}`);
    });

    // 3) Update the created object details using PUT API
    test('3) ____ Update object ____ ', async ({ request }) => {
        expect(addedObjectId).toBeDefined();

        const updateObject = {
            name: 'Updated Object Name',
            data: {
                year: 2026,
                price: 3521.23,
                Description: 'This is updated object for testing'
            }
        };

        const response = await apiUtils.updateObject(request, addedObjectId, updateObject);
        expect(response.status()).toBe(200);

        const object = await response.json();
        console.log(`Object is updated and the update response ____ :`, object);
        expect(object.name).toBe(updateObject.name);
    });

    // 4) Get object by ID
    test('4) ____ Get object by ID ____ ', async ({ request }) =>{
        expect(addedObjectId).toBeDefined();

        const response = await apiUtils.getObjectById(request, addedObjectId);
        expect(response.status()).toBe(200);

        const object = await response.json();
        console.log('Get by ID response ____ : ', object);

    });

    // 5) Delete object using DELETE API
    test('5) ____ Delete added object ____ ', async ({ request }) => {
        expect(addedObjectId).toBeDefined();

        const response = await apiUtils.deleteObject(request, addedObjectId);
        expect(response.status()).toBe(200);

        const getResponse = await apiUtils.getObjectById(request, addedObjectId);
        expect(getResponse.status()).toBe(404);
        console.log(`Response status ____ :`, getResponse);
    });


});