
// Puedo titular las peubas con 'describe' y el nombre del componente que pongo a prueba y dentro las pruebas:

describe('Prueba en <DemoComponent/>', () => {
  
    test('Esta prueba no debe fallar', ()=> {
    
        // 1. INICIALIZACION
        const message1 = 'Hola Luciana';
    
        // 2. ESTIMULO          trim: que elimine los espacios en blanco al principio y al final
        const message2 = message1.trim();
    
        // 3. OBSERVAR EL COMPORTAMIENTO... ESPERADO
        // que message1 sea igual a message2 = condicion para que pase la prueba
        expect( message1 ).toBe( message2 );
        
    });

})


