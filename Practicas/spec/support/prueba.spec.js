const sumar = (a, b) => {
    return a + b;
};

// describe("La función sumar", () => {
//     it("Debe estar definida", () => {
//         expect(sumar).toBeDefined();
//     });

//     it("Debo sumar dos números enviados por argumentos", () => {
//         expect(sumar(2, 2)).toBe(4);
//         expect(sumar(4, 4)).toBe(8);
//         expect(sumar(5, 0)).toBe(5);

//     })
// });

const filtrar = (arr) => arr.filter((num) => num % 2 == 0)

describe('La funcion filtrar', () => {
    it("Debe estar definida", () => {
        expect(filtrar).toBeDefined();
    });

    it('Debe retornar un array', () => {
        expect(Array.isArray(filtrar([1, 2, 3, 4, 5, 6]))).toBe(true);
    });

    it('Debe retornar un array con los números pares', () => {
        expect(filtrar([1, 2, 3, 4])).toEqual([2, 4]);
        expect(filtrar([2, 4, 6])).toEqual([2, 4, 6]);
        expect(filtrar([1, 3, 5, 7])).toEqual([]);
        expect(filtrar([])).toEqual([]);

        
    });
})
// describe('Una prueba con objectos', () => {
//     it('Yo espero que dos numeros sean iguales', () => {
//         expect(5).toBe(5);
//         expect(10).toBe(10);
//     });

//     it('Yo espero que dos palabras iguales sean iguales', () => {
//         expect("Hernan").toBe("Hernan");
//         expect("Dani").toBe("Dani");
//     });

//     it('Yo espero que dos objetos sean iguales', () => {
//         expect({nombre: "Hernan"}).toEqual({nombre: "Hernan"});
//     });

//     it('Espero que dos arrays sean iguales', () => {
//         expect([1, 2, 3]).toEqual([1, 2, 3]);
//     });
// });

//* toBe - toEqual


//* toBeDefined - toBeUndefined


//* toContain