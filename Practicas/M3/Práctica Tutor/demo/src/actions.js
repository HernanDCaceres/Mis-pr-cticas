//? Las acciones o actions son las mensajeras, como un mensajero lleva la informacion de entrega y el contenido o paquete
//? En nuestro caso el type seria el tipo de accion, lo que diferencia una de otra, esa "informacion" en nuestra analogia
//? Y el contenido seria el payload

//? Hay situaciones en las que solo queremos enviar un sobre, no una caja, en ese caso miremoslo como dar un aviso, no es obligatorio enviar un paquete, pero siempre nos piden la informacion
//? Lo mismo ocurre aca, el type es obliogatorio y el payload opcional

// veamos algunos ejemplos

function incrementar() {
  return {
    type: "INCREMENTAR",
  };
}

function addCharacter(character) {
  return {
    type: "ADD_CHARACTER",
    payload: character,
  };
}


//? Ejemplos avanzados

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const completeTask = (taskId) => ({
  type: "COMPLETE_TASK",
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});
