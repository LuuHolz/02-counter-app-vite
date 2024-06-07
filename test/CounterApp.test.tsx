import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en el CounterApp', () => { 

    const initialValue = 10;
    
    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
            //Si pongo -1 tambien va a pasar porque va a encontrar en el objeto el -1 del boton
        // screen.debug();

    });

    test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        //evento que quiero disparar .click y despues el elemento al cual le quiero hacer click
        fireEvent.click( screen.getByText('+1') );
        //espero que el valor esperado sea 11 como screen en pantalla
        expect( screen.getByText('11') ).toBeTruthy();

    });
    
    test('debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        // screen.debug(); = veo que me devuelve 9 despues del click
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // screen.debug(); pruebo que me devuelva 13

            // esta es una manera de buscar el boton, en este caso por el nombre que le puse, pero no es lo mas adecuado.
        // fireEvent.click( screen.getByText('Reset') );

        //si quiero estar 100% segura de que es ese boton y no otro, puedo ponerle un id, name, area-label 
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( initialValue ) ).toBeTruthy();
        // esperamos que el screen sea nuevamente el valor inicial
    });

 })
