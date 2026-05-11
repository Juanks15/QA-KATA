export class RegisterPage {

    page: any;

    constructor(page: any) {
        this.page = page;
    }

    async openPage() {

        await this.page.goto(
            'https://thinking-tester-contact-list.herokuapp.com/addUser'
        );

    }

    async registerUser(email: string) {

        await this.page.fill(
            '#firstName',
            'Juan'
        );

        await this.page.fill(
            '#lastName',
            'Automation'
        );

        await this.page.fill(
            '#email',
            email
        );

        await this.page.fill(
            '#password',
            'Test1234!'
        );

        await this.page.click(
            '#submit'
        );

    }

}