export class ContactPage {

    page: any;

    constructor(page: any) {

        this.page = page;

    }

    async createContact() {

        await this.page.click('#add-contact');

        await this.page.fill('#firstName', 'Juan');

        await this.page.fill('#lastName', 'Perez');

        await this.page.fill('#birthdate', '1995-05-15');

        await this.page.fill('#email', 'juan@test.com');

        await this.page.fill('#phone', '123456789');

        await this.page.fill('#street1', 'Calle 123');

        await this.page.fill('#city', 'Bogota');

        await this.page.fill('#stateProvince', 'Cundinamarca');

        await this.page.fill('#postalCode', '111111');

        await this.page.fill('#country', 'Colombia');

        await this.page.click('#submit');

    }

    async deleteFirstContact() {

        await this.page.locator(
            '.contactTableBodyRow'
        ).first().click();

        this.page.on('dialog', async (dialog: any) => {

            await dialog.accept();

        });

        await this.page.click('#delete');

    }

}