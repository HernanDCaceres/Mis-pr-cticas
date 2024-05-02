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

    