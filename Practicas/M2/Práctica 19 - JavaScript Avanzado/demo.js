function crearContador ( ) {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const contador = crearContador();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());


