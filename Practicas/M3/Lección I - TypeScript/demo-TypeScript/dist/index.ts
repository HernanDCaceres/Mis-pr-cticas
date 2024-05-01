const nombre: string = "Hernán";

const apellido: string = "Cáceres";

const edad: number = 32;

console.log(nombre.toUpperCase());

const alive: boolean = true;

const numPares = [2, 4, 6, 8, 10];

const palabras: string[] = ["Hola", "Chau", "Hernan"];

const numeros: number[] = [];

numeros.push(10);
numeros.push(5);
numeros.push(0);

const sumarNumeros = (arr: number[]) => {
    let suma = 0;
    for (const num of arr) suma += num
    return suma;
}

