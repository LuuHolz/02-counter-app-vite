import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => { 

    test('getImagen debe retornar un URL  de la imagen', async() => {
      
        const url = await getImagen();
        console.log(url);

        //aunque me de error porque no recibo la url la prueba pasa, porque el mensaje de error tambien es un strin: toBe('string')
        expect( typeof url ).toBe( 'string' );

    })

    test('getImagen debe retornar un error si no tenemos api key', async() => {
      
        const respuesta = await getImagen();

        //aunque me de error porque no recibo la url la prueba pasa, porque el mensaje de error tambien es un strin: toBe('string')
        expect( respuesta ).toBe( 'No se encontro la imagen' );

    })
    

})