import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe("Pruebas en 05-funciones", () => {

  test("getUser debe de retornar un objeto", () => {

    const testUser = {
      uid: "ABC123",
      username: "User_1502",
    };

    const user = getUser();

    expect( testUser ).toStrictEqual( user );

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    
    const nombre = 'Luciana';

    const testUserActivo = {
        uid: 'ABC567',
        username: nombre
    }
    
    const userActivo =  getUsuarioActivo( nombre );

    expect( userActivo ).toStrictEqual( testUserActivo )

  })
  


});
