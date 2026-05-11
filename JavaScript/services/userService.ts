export async function createUser(request: any) {

    const uniqueEmail =
        `qa${Date.now()}@test.com`;

    const response = await request.post(
        'https://thinking-tester-contact-list.herokuapp.com/users',
        {
            data: {
                firstName: 'Juan',
                lastName: 'QA',
                email: uniqueEmail,
                password: 'Test1234!'
            }
        }
    );

    return {
        response,
        email: uniqueEmail,
        password: 'Test1234!'
    };
}