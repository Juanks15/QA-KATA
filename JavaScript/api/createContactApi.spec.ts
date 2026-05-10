import 'dotenv/config';

import { test, expect } from '@playwright/test';

import { AuthService } from '../services/AuthService';

import { ContactService } from '../services/ContactService';

test('Crear contacto API', async ({ request }) => {

    // LOGIN
    const authService = new AuthService(request);

    const loginResponse = await authService.login(

        process.env.USER_EMAIL!,

        process.env.USER_PASSWORD!

    );

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    const token = loginBody.token;

    // CONTACT SERVICE
    const contactService = new ContactService(

        request,

        token

    );

    const createResponse = await contactService.createContact();

    expect(createResponse.status()).toBe(201);

    const body = await createResponse.json();

    console.log(body);

});