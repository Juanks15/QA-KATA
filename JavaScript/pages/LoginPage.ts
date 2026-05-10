export class LoginPage {

    page: any;

    constructor(page: any) {

        this.page = page;

    }

    async openPage() {

        await this.page.goto(
            'https://thinking-tester-contact-list.herokuapp.com/'
        );

    }

    async login(email: string, password: string) {

        await this.page.fill('#email', email);

        await this.page.fill('#password', password);

        await this.page.click('#submit');

    }

}