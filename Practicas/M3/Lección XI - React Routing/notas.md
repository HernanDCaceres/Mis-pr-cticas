# Routing

El routing es la gestión de las diferentes vistas de una página web, permitiendo que un usuario pueda navegar entre ellas. El usuario se podrá mover entre las diferentes vistas sin la necesidad de recargar la página por completo. De esta forma, definimos qué elementos serán renderizados en cada ruta.

El término Single Page Application hace referencia a que, en el navegador, se carga solo una sola página HTML.

Su contenido se actualizará de forma dinámica mientras el usuario interactúa con la aplicación. Por ende, en lugar de recargar la página una y otra vez cuando se hace un cambio, lo que hace es alternar la aparición de distintos elementos llamados Views o Pages, que se renderizan según la ruta en la que esté el usuario.

## React router dom

Esta es una librería enfocada en el manejo de rutas para aplicaciones del lado del cliente. Esta herramienta gestiona el proceso de renderizado en una SPA, a partir de las rutas definidas para los diferentes componentes de nuestra aplicación.

## Instalación y configuración

Haremos una pequeña práctica para aprender cómo definir rutas y renderizar componentes en ellas. Por lo que te pedimos que ejecutes los comandos que ya conoces para crear un template inicial de vite con react.

Una vez hecho lo anterior vamos a instalar la librería con el comando...

```
    npm install react-router-dom
```

Documentación de la librería: https://reactrouter.com/en/main/start/overview

## Rutas dínamicas 

Las rutas dinámicas permiten configurar las direcciones web de manera que puedan incluir segmentos variables. Esto conlleva a que una misma ruta maneje diferentes valores en ciertas partes de la URL. 

* Ruta

```jsx
<Route path="/detail/:id" element={<DetailPage/>}>
```

* Componente

```jsx
function DetailPage() {
    const { id } = useParams();

    return <h1>Página de detalle<h1/>
}
```

## Redirección de eventos

En muchos sitios web, la experiencia del usuario implica en ocasiones ser redirigido a rutas específicas para visualizar información. Conozcamos a continuación, dos nuevos hooks que nos permitirán implementar redirecciones dentro de nuestras aplicaciones.

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

