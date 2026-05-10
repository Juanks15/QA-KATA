import 'dotenv/config';

import { test, expect } from '@playwright/test';

import { AuthService } from '../services/AuthService';

test('Login API', async ({ request }) => {

    const authService = new AuthService(request);

    const response = await authService.login(

        process.env.USER_EMAIL!,

        process.env.USER_PASSWORD!

    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

});
