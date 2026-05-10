//Iniciar UI: npx playwright test JavaScript/ui/contact.spec.ts --headed
import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Crear contacto', async ({ page }) => {

    // Abrir pagina
    await page.goto(
        'https://thinking-tester-contact-list.herokuapp.com/'
    );

    // Login
    await page.fill('#email', process.env.USER_EMAIL!);

    await page.fill('#password', process.env.USER_PASSWORD!);

    await page.click('#submit');

    // Crear contacto
    await page.click('#add-contact');

    // Llenar formulario
    await page.fill('#firstName', 'Juan');

    await page.fill('#lastName', 'Perez');

    await page.fill('#birthdate', '1995-05-15');

    await page.fill('#email', 'juan@test.com');

    await page.fill('#phone', '123456789');

    await page.fill('#street1', 'Calle 123');

    await page.fill('#city', 'Bogota');

    await page.fill('#stateProvince', 'Cundinamarca');

    await page.fill('#postalCode', '111111');

    await page.fill('#country', 'Colombia');

    // Guardar contacto
    await page.click('#submit');

    // Validar que exista
    await expect(
    page.getByText('Juan Perez').first()
).toBeVisible();
});