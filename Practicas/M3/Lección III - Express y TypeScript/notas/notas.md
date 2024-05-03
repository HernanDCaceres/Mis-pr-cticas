# Express & TypeScript

## Repaso de herramientas

* **Express**

    Express es un framework minimalista para node, ideal para construir aplicaciones web y APIs. Su sencillez y flexibilidad lo convierten en una opción popular para el desarrollo backend con JavaScript o TypeScript.

    Hemos visto también que pueden agregarse middlewares y servicios, pero por ahora solo nos centraremos en lo básico de un servidor. Un ejemplo sencillo de como crear un servidor básico luce así.

    ```js
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('¡Hola, Express');
    });

    app.listen(3000, () => {
        console.log('Servidor iniciado en el puerto 3000');
    });
    ```
---

* **TypeScript**

    TypeScrip es un lenguaje de programación que potencia las funcionalidades de JavaScript y que nos permite definir tipados estáticos, los cuales nos ayudarán a reducir comportamientos inesperados en la ejecución del código y que podemos prever en tiempo de compilación.

    Por ejemplo, al construir una función dejamos asignado explícitamente el tipo de datos que recibirá como argumentos y que retornará, en caso que devuelva algo:

    ```js
    function saludar(nombre: string): string {
        return `Hola ${nombre}!`;
    }

    const mensaje = saludar('Mario');
    console.log(mensaje); // Hola Mario!
    ```

# Estructura de Proyecto

## Inicialización de Proyecto

Inicialización de proyecto

Para avanzar, vamos a construir una pequeña API Rest para realizar solicitudes básicas de CRUD. Esto ya lo hemos realizado antes...

1. Lo primero será crear un nuevo directorio con el comando mkdir mi-proyecto e ingresar al directorio del proyecto con cd mi-proyecto.

2. Una vez dentro, inicializamos el proyecto utilizando npm init -y.

3. Para instalar TypeScript, ingresa el comando:
    ``` 
    npm install --save-dev typescript @types/express @types/node nodemon ts-node express.
    ```

## Creación y tipado de rutas

El primer paso es crear las rutas y controladores estáticamente tipadas.

Lo primero a realizar es crear una interfaz llamada *recurso.ts* dentro de una nueva carpeta llamada *routes* en el directorio *src*.

Esto permitirá realizar validaciones dentro de las rutas que haremos en su momento.

```js
//src/routes/recursos.ts

interface IRecurso {
    id: string;
    nombre: string;
}
```

**NOTA:** *Recuerda anteponer la letra I mayúscula en el nombre para resaltar el hecho de que es interfaz.*

En este mismo archivo, definiremos el router con cada uno de los métodos HTTP, por lo que deberemos importarlo junto con las interfaces Request y Response para manejar la solicitud y la respuesta a las peticiones, respectivamente.

```js
import { Router, Request, Response } from 'express';

interface IRecurso {
    id: string;
    nombre: string;
}

const router = Router()
```



