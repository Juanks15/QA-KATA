import 'dotenv/config';

import { test, expect } from '@playwright/test';

test('Obtener contactos API', async ({ request }) => {

    // LOGIN
    const loginResponse = await request.post(

        'https://thinking-tester-contact-list.herokuapp.com/users/login',

        {

            data: {

                email: process.env.USER_EMAIL,

                password: process.env.USER_PASSWORD

            }

        }

    );

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    const token = loginBody.token;

    // GET CONTACTS
    const contactsResponse = await request.get(

        'https://thinking-tester-contact-list.herokuapp.com/contacts',

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    expect(contactsResponse.status()).toBe(200);

    const contacts = await contactsResponse.json();

    console.log(contacts);

});