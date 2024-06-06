import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola Luciana"', () => {

        const name = 'Luciana';
        const message = getSaludo( name );

        // Se espera que mensaje sea: 'Hola Luciana'
        expect( message ).toBe(`Hola ${ name }`)
    });
  
})
