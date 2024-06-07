import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  
    test('usContext debe de retornar un objeto', () => {
      
        const clave = '123';
        const nombre = 'Luciana';
        const edad = '30';

        const funcion = usContext(clave, nombre, edad);

        const objUsContext = {
            nombreClave: clave,
            referencia: nombre,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        expect( funcion ).toStrictEqual( objUsContext)

    })
    
})
