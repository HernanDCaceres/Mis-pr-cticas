//? Definir un estado inicial

const initialState = {
  count: 0,
  characters: [],
};

//? Estructura de un reducer:

function reducer(state = initialState, action) {
  //? una action tiene esta estructura -> { type: , payload: }
  //?                                        ^         ^
  //?                                    obligatorio opcional
  // Por ejemplo, {type: "INCREMENTAR"}
  // Por ejemplo, {type: "ADD_CHARACTER", payload: {id:1, age:20}}
  //? Aca en el reducer debemos encontrar algo que matchee con el type
  if (action.type === "INCREMENTAR") {
    //? la idea es devolver un nuevo estado, con la propiedad count en +1
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "ADD_CHARACTER") {
    //? la idea es agregar este nuevo personaje al estado de characters
    return {
      ...state,
      characters: [...state.characters, action.payload],
    };
  } else {
    //? siempre siempre poner el caso por defecto
    //? en caso de que no entre en ninguno, devolver el estado tal como esta
    return state;
  }
}

//? Ejemplo avanzado
const initialState2 = {
  tasks: [],
};
const rootReducer = (state = initialState2, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
