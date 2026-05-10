import 'dotenv/config';

import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { ContactPage } from '../pages/ContactPage';

test('Crear contacto', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const contactPage = new ContactPage(page);

    await loginPage.openPage();

    await loginPage.login(

        process.env.USER_EMAIL!,

        process.env.USER_PASSWORD!

    );

    await contactPage.createContact();

    await expect(

        page.getByText('Juan Perez').first()

    ).toBeVisible();

});