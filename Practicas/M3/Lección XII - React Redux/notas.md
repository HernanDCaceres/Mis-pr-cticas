# Redux

## Estados | Globales vs Locales

Hasta ahora hemos trabajado con estados locales en los componentes y compartiendo información por medio de props. Esta forma de manejar información es útil cuando una aplicación es sencilla y la información almacenada es usada solo por algunos componentes. Sin embargo, pensemos en una aplicación como una red social del nivel de Instagram.

Redux es una librería independiente de react que fue diseñada para manejar de manera sencilla el estado global de una aplicación.

* El objetivo general de redux es proporcionar un almacén centralizado para el estado de la aplicación.

* Facilita el manejo y sincronización de los datos entre las distintas partes que lo consumen.

## Los 3 principios de redux

En Redux, todo gira en torno a tres principios fundamentales: 

1. **Fuente única de la verdad:** todo lo que necesitas saber sobre la aplicación se encuentra en un solo lugar, denominado store, que facilita la gestión y comprensión del estado general.

2. **El estado es de solo lectura:** solo puedes cambiar el estado emitiendo las llamadas actions (acciones), lo que hace que las modificaciones sean predecibles y rastreables. Los estados son considerados inmutables: no pueden ser modificados directamente después de ser creados.

3. **Los cambios son realizados mediante funciones puras:** las transformaciones del estado son manejadas por funciones predecibles y sin efectos secundarios, conocidas como reducers.

## Flujo de información

* Paso 1
    Cuando pedimos un cambio en un componente, como hacer clic en un botón, la información se usa para crear una ACTION. 

* Paso 2
    Esta ACTION luego se envía al STORE, para ser pasada junto con el estado global actual al REDUCER.

* Paso 3
    En esencia, este último decidirá si el cambio solicitado puede realizarse o no.

* Paso 4
    Si es así, modifica el estado global con la información de la ACTION y devuelve el nuevo estado que refleja los cambios en el componente.

## Redux Core

El Redux Core corresponde a los conceptos y funciones fundamentales que componen la librería de redux. Estos son:

* Actions & Action Creators

    Veremos a una action como un objeto que contiene información sobre el cambio solicitado por un componente de la aplicación.

    Este objeto comprende, a lo sumo, dos propiedades básicas:

    Action type: indica el tipo de acción a efectuarse. Actúa como una clave que será utilizada por el reducer para determinar qué cambio realizar.

    Action payload: contiene la información necesaria enviada por el componente para modificar el estado. esta información es opcional dependiendo de la acción a realizar.

* Reducer

    El reducer es una función pura que toma dos argumentos: el estado, (por defecto, el estado inicial de la aplicación) y la action. 


    ⚡Esta función analiza el tipo de acción mediante un switch statement y ejecuta la función correspondiente. Dentro de cada caso, realiza modificaciones al estado global según sea necesario utilizando la información del action payload.


    El objeto devuelto, que mantiene el estado y solo modifica la propiedad correspondiente, asegura la inmutabilidad del estado.

    👍Si no corresponde a ningún caso, el estado se devuelve sin cambios como caso por defecto.

* Store
    La store en Redux es un objeto centralizado que almacena el estado global de la aplicación.

    ⚡Se encarga de ejecutar el reducer para modificar el estado y notificar a los componentes sobre los cambios.


## Redux Toolkit

Esta es una librería oficial de redux que fue creada para incorporar la lógica de redux core de una manera simple y eficiente. Cuenta con métodos y configuraciones que nos ayudan a simplificar el manejo de las estructuras básicas.

Actualmente la integración de toolkit es la aproximación recomendada por redux para trabajar en proyectos reales. 😏Veamos cómo integrar redux con toolkit en una aplicación.

**Instalación**

```
npm install @reduxjs/toolkit react-redux
```

Junto con las siguientes librerías


1. ```@reduxjs/toolkit```, para instalar los paquetes correspondientes a redux toolkit. 
    
2. ```react-redux```, para integrar react con redux.

## Configuración

Nuestra app de ToDoList solo agregará y eliminará tareas. Por el momento, esta aplicación muestra algunas tarjetas definidas manualmente dentro de un estado local en App:

La idea aquí es consumir la información desde el store, que es donde se encuentra el estado global. Lo primero que debemos hacer es envolver a App dentro del componente Provider.

* **useSelector**

    El proceso de suscripción consiste en hacer que un componente se mantenga al tanto de los cambios realizados en el estado global. Esto le permitirá actualizar la información que utiliza del estado sin importar en qué parte de la aplicación haya sido modificada.

    Para poder suscribir a un componente, utilizamos el hook useSelector de react-redux. Este selector recibe una función callback que “selecciona” a qué propiedad del estado global deseamos suscribirnos.

* **useDispacth**

    Vamos a hablar de un nuevo método de redux: dispatch. Este hace referencia a una función encargada de enviar las acciones a los reducers en respuesta a eventos específicos.

    Puede ser utilizada con el hook useDispatch de react-redux, el cual toma como argumento la acción que deseamos despachar al reducer.

    * Create To Do

        Para nuestro ejemplo, vayamos al componente CreateTodo que se encargará de recibir la información proporcionada por el usuario dentro de un formulario.

        Esta información será el payload de una acción encargada de agregar una tarea a nuestro estado global.

    * Add To Do

        Por otro lado, restará manejar la lógica en el reducer addTodo. Tomaremos la propiedad todos del estado global y modificaremos su valor agregando la tarea que recibimos por payload.

            * Se asignará también un valor de id incremental de acuerdo a la cantidad de elementos dentro del array.
        
        Como mencionamos antes, aunque el estado en Redux es inmutable, Redux Toolkit utiliza la librería interna para permitirnos escribir código que parece mutar directamente el estado.

    * Remove To Do

        Para removeTodo, por su parte, filtraremos el estado con el método filter de JavaScript.

        Este método crea un nuevo array con las coincidencias del valor especificado. En este caso, usaremos el operador "!" para obtener todo excepto el valor definido, que será el id previamente asignado.

