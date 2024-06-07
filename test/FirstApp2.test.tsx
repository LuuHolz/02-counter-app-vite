
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en FirstApp', () => {

   //variables reutilizables
   const title = 'Titutlo de prueba';
   const subTitle = 'SubTitulo de prueba';

   test('Debe de hacer match con le snapshot', () => {
     
        const { container } = render( <FirstApp title={title} subTitle={subTitle}/> )
        expect( container ).toMatchSnapshot();
   })

   test('Debe de mostrar el mensaje de title = Titutlo de prueba', () => {

        render( <FirstApp title={title} subTitle={subTitle}/> )

        //SCREEN: es el objeto que estamos renderizando. GETBYTEXT: que lo busquemos por el texto. TOBETRUTHY: tiene que existir
        expect( screen.getByText(title) ).toBeTruthy()
        
        //para ver el objeto
        // screen.debug();
   })
   
   test('Debe de mostrar el titulo en un H1', () => {

        render( <FirstApp title={title} subTitle={subTitle}/> )
                        //getByRole: buscar por algun objeo HTML
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
   })

   test('Debe de mostrar el subtitulo enviado por props', () => {

        render( <FirstApp title={title} subTitle={subTitle}/> )
        expect( screen.getAllByText(subTitle).length ).toBe( 2 );
})
   
    
    
});