import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => { 

         // DONE: funcion que mando a llamar cuando se temrina de ejecutar el test del codigo completo, le avisa a jest que termino.
    test('getHeroeByIdAsync de retornar un heroe', (done) => {

        //objeto 1 del archivo heroes
        const id = 1;

        getHeroeByIdAsync( id )
            .then( hero => {

                expect( hero ).toStrictEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );

                done();
            })
    })
    
    test('getHeroeByIdAsync de retornar un error si heroe no existe', (done) => {
      
        //objeto 100 no existe
        const id = 100;

        getHeroeByIdAsync( id )

            .catch( error => {

                expect( error ).toBe( `No se pudo encontrar el heroe ${ id }`);

                done()
            });

    })


})