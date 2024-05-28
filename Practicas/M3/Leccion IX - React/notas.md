# Ciclos de vida de un componente en React

El término ciclo de vida se refiere a las fases y métodos que ocurren desde que un componente comienza a renderizarse en pantalla hasta que desaparece. Estas fases permiten que los componentes realicen diferentes tareas.

Aunque actualmente el concepto del ciclo de vida ha cambiado ligeramente gracias a la introducción de los hooks, es importante conocer las cuáles son estas etapas en su forma original para entender mejor cómo controlarlos.

## Hook useEffect

El ciclo de vida en los componentes funcionales se trabaja de una manera muy distinta a cómo lo vimos en los componentes de clase. Aquí se incorpora el concepto de efectos. Estos hacen referencia a acciones secundarias que pueden llevarse a cabo más allá de la propia renderización. De esta forma, se puede controlar en qué momento del ciclo queremos que estas acciones ocurran.

Para gestionar estos efectos, react cuenta con un hook integrado llamado useEffect(), que se encarga de realizar efectos secundarios dentro de los componentes funcionales en las distintas etapas del ciclo de vida. 

El hook useEffect nos permitirá realizar acciones cuando un componente se monta, se actualiza o se desmonta.

## Estructura

```jsx
import { useEffect } from 'react';
//MONTAJE

useEffect(() => { //El hook useEffect recibe un primer parámetro que es una función callback
    //Código  
})

//DESMONTAJE
useEffect(() => { //Para poder ejecutar código cuando un componente se desmonta tendremos que retornar un callback dentro del primer callback
    return => {/*Código*/} 
})

//ARREGLO DE DEPENDENCIAS
useEffect(() =>{
    // ...
}, [/*Dependencias*/] 
```

## Casos de Uso

* Montaje

    * Solicitud de datos desde una API o base de datos.

    * Realizar suscripciones a eventos del navegador.

    * Inicializar recursos externos como, por ejemplo, un reproductor de video.

* Actualización

    * Realizar acciones cada vez que una prop específica cambie.

    * Actualizar el título de la página cada vez que el estado del componente se modifique.

    * Gestionar acciones cada vez que una sección específica del estado cambia, por ejemplo, cuando un usuario inicia sesión.

* Desmontaje

    * Limpiar suscripciones a eventos del navegador.

    * Limpiar el almacenamiento local del navegador.

    * Cancelar peticiones de red o APIs.