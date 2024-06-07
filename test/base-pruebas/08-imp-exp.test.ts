import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {
      
        const id = 1;
        const hero = getHeroeById( id );
        const objeto =     {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }

        expect( hero ).toStrictEqual( objeto );
    })
    
    test('getHeroeById debe de retornar undefine si no existe el ID', () => {
      
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy( );
    })

    //TAREA
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        
        
        const owner = 'DC';
        const heroesFuncion = getHeroesByOwner( owner );
        console.log( heroesFuncion )


        // Dos formas de hacerlo
        expect( heroesFuncion.length ).toStrictEqual( 3 );
        expect( heroesFuncion ).toStrictEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }] 
        );
        expect( heroesFuncion ).toStrictEqual( heroes.filter( (heroe)=> heroe.owner === owner ))
    })
    

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        
        
        const owner = 'Marvel';
        const heroesFuncion = getHeroesByOwner( owner );
        console.log( heroesFuncion )


        // Dos formas de hacerlo
        expect( heroesFuncion.length ).toStrictEqual( 2 );
        expect( heroesFuncion ).toStrictEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ] 
        );
        expect( heroesFuncion ).toStrictEqual( heroes.filter( (heroe)=> heroe.owner === owner ))
    })

 })