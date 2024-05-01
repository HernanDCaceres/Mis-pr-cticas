# TypeScript

TypeScript es un lenguaje de programación de código abierto fuertemente tipado que actúa como una extensión de JavaScript. En otras palabras, es JavaScript con esteroides.

## Tipado Fuerte

Dentro de los lenguajes de programación JavaScript es considerado un lenguaje "debilmente tipado". Esto significa que las variables de JavaScript pueden cambair de tipo según corre el programa.

**Ejemplo:**

```js

let x = 10;

x = "Ahora es un string";

console.log(typeOf x); //String

```

En TypeScript esto no es posible ya que maneja un tipo de dato estático. Lo que impide un cambio de variable en la ejecución. Intentarlo llevaría a un error.

``` ts
let x: number = 10;

x = "Ahora soy un string"; Type 'string' is not assignable to type number.

```

## ¿Por qué usar TypeSript?

En realidad, TypeScript nos da las mismas funcionalidades de JavaScript, pero con una capa extra de seguridad gracias a su sistema de tipado. Por esto se dice que son lenguajes “primos”. Esto quiere decir que podemos trabajar código tal como lo haríamos con JavaScript, pero con la ventaja de que podemos supervisar la consistencia en los tipos de datos utilizados para prevenir comportamientos inesperados en el código o bugs.

## Configuración de entorno

Para poder utilizar TypeScript es necesario instalarlo dentro de nuestro proyecto o de forma global en nuestra computadora. Esto lo podemos hacer con estos comandos...

## Global

Con este comando podrás instalar TypeScript de forma global en tu computadora y utilizarlo sin problemas en cualquier proyecto.

```
npm install -g typescript
```

## Local

Este comando creará automáticamente un proyecto local de node con todas las dependencias de este lenguaje ya instaladas.

```
npm install --save-dev typescript ts-node
```

---

**Te recomendamos que NO instales TypeScript globalmente, ya que puede traer problemas de compatibilidad de versiones más adelante.**

---


Una vez hecho esto, podremos compilar el código TS a JS utilizando el comando 

```
npx tsc index.ts.
```

Al hacerlo, nos daremos cuenta que dentro de nuestro proyecto se crea un archivo de .js. ¡Es un archivo de JavaScript básico!

# ESLint

ESLint es una herramienta para análisis de código de JavaScript, puede ser implementada con TypeScript mediante la adición de algunos plugins con características específicas. Para incorporarlo a nuestro proyecto, es necesario instalar dependencias que serán utilizadas durante el proceso de desarrollo, a través del comando…

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier --save-dev

```

De esta forma podemos utilizar a ESLint para analizar y darle formato al código, aunque debemos hacer algunas configuraciones. En primera instancia, hay que crear un archivo de configuración llamado .eslintrc.js (nótese el punto del inicio) entro del cual configuraremos los plugins necesarios.

```js
// .eslintrc.js

module.exports = {
    parser: "@typescript-eslint/parser",
    pluggins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "pluggin:@typescript-eslint/recommended"],
    rules: {
        //!Se pueden añadir reglas personalizadas aquí
    },
};
```

---

Por último, solo tendrás que asignar en el package.json un nuevo script llamado lint con el valor de la imagen.

```js
"lint": "eslint . --ext .ts"
```

