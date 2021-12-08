import { getUser } from "../../base/05-funciones";
import { getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom';



describe("Prueba en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    }

    const user = getUser();

    expect( user ).toEqual( userTest )
  });
});


describe("Prueba en 05-funciones tarea", () => {
    test("getUsuarioActivo debe de retornar un objeto con parametros", () => {
      
        const nombre = 'raquel';
      
        const userActivoTest = { 

            uid: 'ABC567',
            username: nombre
        }
        const userActivo = getUsuarioActivo(nombre);

        expect( userActivo ).toEqual( userActivoTest )
  
      
    });
  });
