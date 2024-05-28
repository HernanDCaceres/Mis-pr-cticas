# React

React es una librería desarrollada específicamente para la creación de interfaces de usuario utilizando pequeñas piezas independientes y reutilizables conocidas como componentes, que en conjunto dan forma a una aplicación web en su totalidad.

## Vite

Para trabajar con react es necesario instalar la librería, y, aunque es posible realizar esto de forma manual con npm, la documentación nos alienta a utilizar alguna herramienta externa que nos permita construir una base optimizada de un proyecto con una pre-configuración. 

Link de la documentación:

https://react.dev/learn

Podemos trabajar con diferentes frameworks, como Gatsby o NextJS para hacer los cimientos de nuestro proyecto. Por el momento vamos a utilizar uno llamado Vite. En pocas palabras, esta herramienta nos facilitará el acceso y configuración de react.

Vite permite desarrollar más rápido, dado que carga módulos sobre la marcha. Básicamente, carga lo que necesitas cuando lo necesitas, lo cual mejora el rendimiento y la experiencia de desarrollo.

## Instalacion

Se inicia en la consola con el siguiente comando:

```
    npm create vite@latest
```

## Flujo de datos

Vamos a retomar uno de los principios básicos de React que vimos en la clase pasada: el Flujo unidireccional. Al mismo tiempo, conoceremos qué son y cómo funcionan las propiedades comúnmente llamadas props de los componentes

## Direccionalidad

El manejo de la información como un flujo unidireccional es uno de los principios en los que se centra react. Se refiere a que los datos, dentro de una aplicación, siguen un único orden al momento de ser transferidos entre componentes.

## Estado de un componente

Cuando hablamos del estado de un componente, nos referimos a un objeto que permite almacenar y gestionar información, así como cambiar su apariencia y comportamiento a partir de la interacción de un usuario.

Los estados nos permiten determinar cuándo renderizar (o actualizar) los componentes de nuestra página. Esto quiere decir que, siempre que actualicemos el estado de un componente, el componente actualizará de forma inmediata su información.

## Hooks

Los hooks son funciones especiales que permiten que un componente utilice características de react. Estos son siempre y únicamente empleados dentro de un componente. 

## Casos de uso

Lo primero que debemos hacer antes de construir un estado, es importar el hook useState dentro del componente y en la parte superior del archivo.

```ts
import { useState } from 'react';
```

Dentro del componente funcional, utilizamos el hook useState para declarar el estado. Este tomará un argumento (el valor inicial del estado) y devuelve un array con dos elementos: la variable de estado y una función para actualizar ese estado.

```js
import { useState } from 'react';

const MiComponente = () => {
    const [ MiEstado, setMiEstado ] = useState(valorInicial);
    //Resto de código del componente 
}
```

Podemos utilizar la variable de estado (miEstado) en cualquier parte del componente donde se necesite acceder o mostrar el valor actual del estado.


```js
import { useState } from 'react';

const MiComponente = () => {
    const [ MiEstado, setMiEstado ] = useState(valorInicial);
    
    return (
        <div>
        <p>Valor inicial del estado: {MiEstado}</p>
        {/*Otro código renderizado*/}
        <div/>
    );
};
```

La función proporcionada por useState (setMiEstado) nos permitirá actualizar el valor del estado cuando sea necesario. 

Esto generalmente se hace en respuesta a algún evento, como un clic de botón o un cambio en un formulario.


```js
import { useState } from 'react';

const MiComponente = () => {
    const [ MiEstado, setMiEstado ] = useState(valorInicial);
    
    return (
        <div>
        <p>Valor inicial del estado: {MiEstado}</p>
        <button onClick={handleClick}>Actualizar Estado</button>
        <div/>
    );
};
```
## Usos comunes

* Contado

    Ayuda a levar la cuenta de un valor y actualizar el número.

    ```jsx
    const [count, setCount] = useState(0);
    ```

* Entrada de usuraio

    Usado para gestionar el valor de un campo de entrada de usuario.

    ```js
    const [inputValue, setInputValue ] = useState('');
    ```

* Control de visibilidad

    Permite cambiar la visibilidad de un elemento de la interfaz del usuario.

    ```js
    const [isVisible, setIsVisible] = useState(true);
    ```

* Datos de formulario

    Se utiliza para almacenar y actualizar la información proveniente de un formulario.

    ```js
    const [formData, setFormData] = useState({ username: '', password: ''});
    ```


## Props

La forma de transferir la información entre componentes es mediante el uso de propiedades (props). Estas propiedades son datos que guardaremos dentro de un objeto, y que lo pasaremos como un argumento al componente hijo.

## Información vs. Eventos

Hemos mencionado a lo largo de la clase que el flujo de la información viaja de un componente padre a un componente hijo, y solo en esa dirección. 

Sin embargo, cuando trabajamos con eventos en React (como por ejemplo, hacer clic sobre elementos, escribir contenido en un campo, submitear un formulario, presionar una tecla o mover el ratón, entre otros), estos se propagan en sentido inverso al flujo de la información.

Es decir, se originan en componentes hijos y son manejados por funciones pasadas como props desde componentes padres.

