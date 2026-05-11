import { test, expect } from '@playwright/test';

import { createUser } from '../services/userService';

test('Crear usuario API', async ({ request }) => {

    const result = await createUser(request);

    expect(
        result.response.status()
    ).toBe(201);

    const body =
        await result.response.json();

    console.log(body);

    console.log('EMAIL:', result.email);

});