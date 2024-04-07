function filtrarYOrdenar(arreglo, genero, edad) {
    // Filtrar por género y edad
    const filtrados = arreglo.filter((objeto) => {
      return objeto.genero === genero && objeto.edad === edad;
    });
  
    // Ordenar alfabéticamente por nombre y apellido
    filtrados.sort((a, b) => {
      const nombreA = a.nombre.toLowerCase();
      const apellidoA = a.apellido.toLowerCase();
      const nombreB = b.nombre.toLowerCase();
      const apellidoB = b.apellido.toLowerCase();
  
      if (nombreA === nombreB) {
        // Si los nombres son iguales, ordenar por apellido
        return apellidoA.localeCompare(apellidoB);
      } else {
        return nombreA.localeCompare(nombreB);
      }
    });
  
    return filtrados;
  }
  
  // Ejemplo de uso
  const personas = [
    { nombre: "Juan", apellido: "Pérez", genero: "M", edad: 25 },
    { nombre: "María", apellido: "Gómez", genero: "F", edad: 30 },
    { nombre: "Pedro", apellido: "López", genero: "M", edad: 25 },
    { nombre: "Ana", apellido: "Martínez", genero: "F", edad: 30 },
  ];
  
  const generoFiltrado = "F";
  const edadFiltrada = 30;
  
  const resultados = filtrarYOrdenar(personas, generoFiltrado, edadFiltrada);
  console.log(resultados);