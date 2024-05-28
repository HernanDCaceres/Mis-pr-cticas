interface IPersona {
    id: number,
    nombre: string,
    hobbies: string[],
    contacto: {
        email: string,
        celular: number
    }
}

const homero: IPersona = {
    id: 1,
    nombre: "Homero",
    hobbies: ["Escuchar música", "Mirar TV"],
    contacto: {
        email: "homero@ejemplo.com",
        celular: 123456789
    }
}

console.log(homero);
