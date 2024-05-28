//? Definir un estado inicial

const initialState = {
  count: 0,
  characters: [],
};

//? Estructura de un reducer:

function reducer(state = initialState, action) {
  if (action.type === "INCREMENTAR") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "ADD_CHARACTER") {
    return {
      ...state,
      characters: [...state.characters, action.payload],
    };
  } else {
    return state;
  }
}

export default reducer;