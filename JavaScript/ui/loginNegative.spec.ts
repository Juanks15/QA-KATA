import { test, expect } from '@playwright/test';

test('Login inválido', async ({ page }) => {

    await page.goto(
        'https://thinking-tester-contact-list.herokuapp.com/'
    );

    await page.fill(
        '#email',
        'correo_invalido@test.com'
    );

    await page.fill(
        '#password',
        'passwordIncorrecto'
    );

    await page.click(
        '#submit'
    );

    await expect(
        page.locator('#error')
    ).toBeVisible();

});