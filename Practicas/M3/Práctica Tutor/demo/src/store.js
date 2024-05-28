//? Debemos traernos el createStore de redux para crear esa cajita que va a almacenar la info
import { legacy_createStore as createStore } from "redux";
//? Nos traemos el engranaje, en nuestro caso, el reducer que le indica al store como se van a actualizar los estados
import rootReducer from "./reducers";
//? Para crear el store o la caja, hacemos lo siguiente: 
const store = createStore(rootReducer);

export default store;
