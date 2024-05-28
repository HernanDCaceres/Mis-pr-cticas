//? EJERCICIO 1 ----- -----
function saludar(nombre: string): string {
    return `¡Hola, ${nombre}! ¿Cómo estás?`;
  }
  // Tipado "IMPLÍCITO" en "const":
  const mensaje = saludar("Homero");
  console.log(mensaje);
  // Tipado "EXPLÍCITO" en "const":
  const nuevoMensaje: string = saludar("Marge");
  console.log(nuevoMensaje);

