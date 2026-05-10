export class AuthService {

    request: any;

    constructor(request: any) {

        this.request = request;

    }

    async login(email: string, password: string) {

        const response = await this.request.post(

            'https://thinking-tester-contact-list.herokuapp.com/users/login',

            {

                data: {

                    email,

                    password

                }

            }

        );

        return response;

    }

}