class SuperHeroe {
    constructor(nombre, identidad, superpoder){
        this.nombre = nombre;
        this.superpoder = superpoder;
        this.identidad = identidad;
    }
    volar(){
        console.log("Mi nombre es ", this.nombre);
    }
}

let superman = new SuperHeroe ("Superman", "Clark Kent", ["volar", "fuerza"]);
superman.volar();