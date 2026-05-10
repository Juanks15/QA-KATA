import 'dotenv/config';

import { test, expect } from '@playwright/test';

test('Eliminar contacto API', async ({ request }) => {

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

    // CREATE CONTACT
    const createContactResponse = await request.post(

        'https://thinking-tester-contact-list.herokuapp.com/contacts',

        {

            headers: {

                Authorization: `Bearer ${token}`

            },

            data: {

                firstName: 'Delete',

                lastName: 'Test',

                birthdate: '1990-10-10',

                email: 'delete@test.com',

                phone: '123456789',

                street1: 'Delete Street',

                city: 'Bogota',

                stateProvince: 'Cundinamarca',

                postalCode: '111111',

                country: 'Colombia'

            }

        }

    );

    expect(createContactResponse.status()).toBe(201);

    const contactBody = await createContactResponse.json();

    const contactId = contactBody._id;

    console.log('CONTACT ID:', contactId);

    // DELETE CONTACT
    const deleteResponse = await request.delete(

        `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    expect(deleteResponse.status()).toBe(200);

    console.log('Contacto eliminado correctamente');

});