import { test, expect } from '@playwright/test';

test('Obtener contactos sin token', async ({ request }) => {

    const response = await request.get(
        'https://thinking-tester-contact-list.herokuapp.com/contacts'
    );

    expect(response.status()).toBe(401);

    const body = await response.json();

    console.log(body);

});