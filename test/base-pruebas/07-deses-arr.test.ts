
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar un string y un numero', () => {
      
        //puedo desestructurar lo que me devuleve la funcion:
        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //Comprobar el tipo de dato:
        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        //Prueba por si espera cualquier tipo de string y no solo ABC.
        //Sirve cuando usamos algo aleatorio
        expect( letters ).toStrictEqual( expect.any(String) );


    })
    
  
})
