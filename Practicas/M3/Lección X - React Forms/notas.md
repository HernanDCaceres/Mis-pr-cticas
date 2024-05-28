# Formularios en React

Los formularios son elementos muy importantes en las páginas web. Sirven como un puente entre un usuario y la base de datos. A través de los formularios podemos proporcionar información para que la aplicación pueda trabajar con ella.

## Formularios Controlados

El término formulario controlado se refiere a formularios donde los elementos de entrada (inputs, textarea, selectores, checkbox, etc) están vinculados al estado del componente y son gestionados (controlados) por este. Esto nos permite centralizar la información, realizar validaciones y manejar eventos de forma precisa.

La validación de datos nos permite garantizar que la información almacenada en una base de datos o utilizados en una aplicación sean precisos y consistentes, lo que evita errores en el funcionamiento del sistema. 

Podemos pensar que las validaciones son una capa adicional de seguridad y así evitar que datos incorrectos o no válidos lleguen al servidor, ahorrando recursos y evitando procesamientos innecesarios. Existen diferentes formas de validar un formulario.

## Expresiones regulares

Las expresiones regulares (regex) son patrones de búsqueda que permiten encontrar y manipular cadenas de texto. Se utilizan para validar, buscar y manipular datos en texto de manera eficiente.

Para hacernos a una mejor idea de esto, supongamos que recibes una lista de contactos y deseas validar que todos los teléfonos realmente sean números y no texto. Con una expresión regular, puedes buscar un patrón específico.

```ts
function esNumerico(str) {
    return /^\d+$/.test(str)
    //Válida si lo ingresado es un número
}

console.log(esNumerico("12345")); // true
console.log(esNumerico("12345abc")) //false
```

## Validación de errores

En el siguiente ejemplo vamos a construir una función de JavaScript en la que validaremos si lo que recibimos es realmente un correo electrónico.

Para esto utilizaremos un condicional y el método test nativo del lenguaje. En caso de no cumplirse la validación agregará "error" al objeto de errores con el mensaje "username is invalid".

```ts
function validar(input) {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input.username)) {
        errors.username = "username is invalid";
    }

    return errors;
}
```

Al escribir dentro del input de username veremos que la validación devuelve un objeto con error hasta el momento en que cumplimos con el patrón esperado.

Ahora solo resta controlar que, si hay errores, el usuario no pueda enviar la información del formulario (lógico, ¿verdad?). La forma más sencilla de hacerlo es generar una condición dentro de una función submitHandler() que evalúe el estado errores.

```ts
function submitHandler(event) {
    event.preventDefault();

    if(Object.keys(errors).length) {
        return alert("There are errors")
    }

    alert(`username: ${userData.username} password: ${userData.password}`);
} 
```

# Formik

Ahora solo resta controlar que, si hay errores, el usuario no pueda enviar la información del formulario (lógico, ¿verdad?). La forma más sencilla de hacerlo es generar una condición dentro de una función submitHandler() que evalúe el estado errores.

Para entender mejor la ventaja que nos trae Formik, vamos a transformar nuestro formulario de login a uno creado con esta librería.

```
 npm i formik --save
```

## React forms vs Formik

Una vez instalada la herramienta, tendremos acceso a las funciones, elementos y componentes disponibles en formik. Empecemos por crear un componente llamado FormikLogin e importemos las dependencias que utilizaremos...

* Formik | Form | Field | Error Message

Todos estos elementos son componentes de Formik que deberás importar, y que sustituyen a los tags de HTML que utilizamos para construir el formulario anterior. 

```jsx

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validar } from './helpers';

function FormikLogin () {
    return (
        <Formik
        initialValues = {{username: '', password: ''}}
        validate = {validar}
        onSubmit = {(values) => {alert(`username: ${values.username} password: ${values.password} `)}}
        >

        <Form>
            <label>USERNAME</label>
            <Field type="text" name="username" placeholder="example@mail.com" />
            <ErrorMessage name="username" />

            <label>PASSWORD</label>
            <Field type="password" name="password" placeholder="******" />
            <ErrorMessage name="password">

          <button type="submit">SUBMIT</button>
        </Form>
        </Formik>
    
    );
}

```