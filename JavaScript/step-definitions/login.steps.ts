import {

    Given,

    When,

    Then

} from '@cucumber/cucumber';

Given(

    'el usuario entra a la pagina',

    async function () {

        console.log('Entrando a la pagina');

    }

);

When(

    'ingresa credenciales validas',

    async function () {

        console.log('Ingresando credenciales');

    }

);

Then(

    'deberia ingresar correctamente',

    async function () {

        console.log('Login exitoso');

    }

);