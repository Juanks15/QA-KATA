import { test, expect } from '@playwright/test';

import { RegisterPage } from '../pages/RegisterPage';

test('Crear usuario UI', async ({ page }) => {

    const registerPage =
        new RegisterPage(page);

    const uniqueEmail =
        `qa${Date.now()}@test.com`;

    await registerPage.openPage();

    await registerPage.registerUser(
        uniqueEmail
    );

    await expect(page).toHaveURL(
        /contactList/
    );

});
