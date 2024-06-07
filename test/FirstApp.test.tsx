
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {

    // test('Debe hacer match con el snapshot', () => {
    
    //     const title = 'Hola, soy la prueba';
    //     const subTitle = 'Subtitulo de prueba';

    //     //  RENDER: renderiza nuestro componente en memoria
    //     const { container } = render( <FirstApp title={ title } subTitle={subTitle} /> );

    //     expect( container ).toMatchSnapshot();

    // });

    test('Debe mostrar el titulo en un H1', () => {

        const title = 'Hola, soy la prueba';
        const subTitle = 'Subtitulo de prueba';

        const { container, getByText, getByTestId } = render( <FirstApp title={ title } subTitle={subTitle}/> );

        //testing flexible
        // el getByText verifica que haya un title
                                //Truthy se asegura de que exista
        expect( getByText(title)).toBeTruthy();


        //hcerlo asi tan extricto como los ejemplos siguientes no es lo recomendable, 
        //deben ser flexibles, si cambio el h1 por un span, div, o lo calmbio de linea que no me de error.

        //el query va a buscar en el dom si hay un H1, puedo busrlo por '#' '. ' '[]'. El query solo devulve un H1
        const h1 = container.querySelector('h1');

        // se espera un H1 que contenga (.toContain) o que sea (.toBe) el titulo
        expect(h1?.innerHTML).toContain( title );

        // busqueda por ID                         //toBe se asegura que sea estrictamente igual, mismo tipo, espacios...
        expect( getByTestId('test-title').innerHTML ).toBe(title)
                                                 //toContain solo verifica que contenga esa palabra/string
    });

    test('Debe mostrar el subtitulo enviado por Props', () => {

        const title = 'Hola, soy la prueba';
        const subTitle = 'Subtitulo de prueba';

        const { getAllByText } = render( <FirstApp title={ title } subTitle={subTitle}/> );

        expect( getAllByText(subTitle).length ).toBe(2);
      
    })
    
    
    
});