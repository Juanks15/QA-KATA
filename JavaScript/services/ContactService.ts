export class ContactService {

    request: any;

    token: string;

    constructor(request: any, token: string) {

        this.request = request;

        this.token = token;

    }

    async createContact() {

        return await this.request.post(

            'https://thinking-tester-contact-list.herokuapp.com/contacts',

            {

                headers: {

                    Authorization: `Bearer ${this.token}`

                },

                data: {

                    firstName: 'Carlos',

                    lastName: 'QA',

                    birthdate: '1990-10-10',

                    email: 'carlosqa@test.com',

                    phone: '123456789',

                    street1: 'Calle QA',

                    city: 'Bogota',

                    stateProvince: 'Cundinamarca',

                    postalCode: '111111',

                    country: 'Colombia'

                }

            }

        );

    }

    async getContacts() {

        return await this.request.get(

            'https://thinking-tester-contact-list.herokuapp.com/contacts',

            {

                headers: {

                    Authorization: `Bearer ${this.token}`

                }

            }

        );

    }

    async deleteContact(contactId: string) {

        return await this.request.delete(

            `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`,

            {

                headers: {

                    Authorization: `Bearer ${this.token}`

                }

            }

        );

    }

}