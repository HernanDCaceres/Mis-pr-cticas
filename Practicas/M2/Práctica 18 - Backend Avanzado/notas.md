# Backend Avanzado

## Responsabilidad y modularización

El proceso de modularización y división de responsabilidades es la forma en la que el código se organiza y se divide en carpetas y archivos independientes, para facilitar su desarrollo, mantenimiento y escalabilidad. 

El proceso de modularización y división de responsabilidades es la forma en la que el código se organiza y se divide en carpetas y archivos independientes, para facilitar su desarrollo, mantenimiento y escalabilidad. 

## Estrategias de modularización

* **Diseño Modular desde el principio**

Identifica los componentes principales del sistema y cómo se relacionan entre sí.

👉*Por ejemplo, si vamos a crear un servidor que trabaje como API Rest de una aplicación, dividiremos el proyecto en carpetas asociadas a la configuración del servidor, enrutadores, controllers y handlers como mínimo.*

<img src="./Assets/1.jpg" width="300">  

* **Separación de preocupaciones**

Divide tu código en módulos que se ocupen de preocupaciones específicas.

Esto facilita la comprensión y el mantenimiento del código. Es decir que, dentro de cada una de estas carpetas y archivos, se desarrollará la **lógica específica** para trabajar con un elemento de mi aplicación.

👉 *Por ejemplo, dentro de la carpeta controllers puedo crear un módulo donde almacenar la lógica para cada uno de los recursos de mi API.*

<img src="./Assets/2.png" width="300">


* **Principio de respnsabilidad única**

Como ya mencionamos en múltiples oportunidades, cada archivo o módulo debe tener una responsabilidad única y bien definida.

😉 Evita la sobrecarga de funcionalidades en un solo archivo y asegúrate de que, además, tenga un propósito claro.

Así, cada uno de los módulos se encargará de contener la lógica enfocada a gestionar la información de un solo recurso, facilitando su manipulación y mantenimiento.

<img src="./Assets/3.jpg" width="300">

* **Jerarquía de archivos y carpetas**

**Organiza** tus archivos y carpetas de manera lógica y coherente.

👉  Por ejemplo, puedes agrupar archivos relacionados en carpetas según su función o módulo. Utiliza una estructura de carpetas clara y consistente en todo el proyecto.


Cuando el proyecto sea cada vez más grande, será necesario incorporar nuevas herramientas y archivos a la aplicación, así que es fundamental definir la jerarquía para simplificar el manejo de información e importaciones entre módulos.


👉  Por ejemplo, si agrego un ODM para definir los modelos o entidades de mi base de datos, lo ideal sería definirla dentro de los niveles más altos de mi proyecto ya que la configuración del servidor y controladores van a requerir acceso a dicha información.


<img src="./Assets/4.jpg" width="300">

* **Nombres descriptivos**

😉 Esto facilita la comprensión del propósito de cada uno de ellos y su relación con otros archivos en el proyecto.

<img src="./Assets/5.jpg" width="500">

* **Acoplamiento mínimo**

**Minimiza** el acoplamiento entre módulos y archivos. Esto significa que los módulos deben tener la menor dependencia posible entre sí y comunicarse a través de definiciones claras y específicas.

En otras palabras, te invitamos a planificar la interacción entre módulos para minimizar las importaciones y exportaciones innecesarias.


👉 Por ejemplo, el enrutador de tu aplicación solo debe acceder a los handlers que le corresponden y estos a su vez se encargan de importar los controladores necesarios para que la ruta funcione correctamente. 

## Abstracción

En el contexto de la modularización, la abstracción permite interactuar con un módulo sin necesidad de entender todos los detalles internos de su implementación.

🎯 Su principal objetivo es simplificar el uso de una funcionalidad al exponer solo lo relevante, ocultando el resto de información más compleja.

# Manejo de Errores

Para garantizar el correcto funcionamiento y eficiencia de una aplicación, debemos identificar aquellas tareas susceptibles de provocar errores en algún momento. 

Esta detección permite gestionar de manera adecuada cualquier tipo de error que pueda ocurrir durante la ejecución del código, con lo cual prevenimos que una aplicación se bloquee o genere comportamientos inesperados.

* **Estrategias para el manejo de errores**

    * *Try & Catch*

    Envuelve la ejecución de una tarea propensa a errores dentro del bloque **try** seguido del bloque **catch**, que capturará y manejará cualquier error dentro del bloque anterior.

    Una de las implementaciones más frecuentes de esta herramienta es para el 
    manejo de errores en funciones asíncronas lo cual nos brinda una alternativa para procesar la finalización de una promesa en caso de éxito
    o de rechazo.

    * *Throw*

    Cuando el error es causado por el cliente debido a una solicitud mal estructurada aparece otra estrategía para el manejo de errores: el uso del **throw**.

    Esta palabra clave nos permite lanzar errores explícitamente y se utiliza para crear condiciones específicas de error dentro del código, es decir, podemos personalizar el mensaje del error usando a throw.

    * *Middlewares*

    Son funciones que actuan como intermediarias en el flujo de una solicitud dentro de nuestro servidor, esto es, **ocurren antes de llegar al endpoint** de destino.

    Una de las grandes aplicaciones de estos middlewares es el manejo de errores
    que pueden presentarse de forma repetitiva dentro del código y que pueden ser validados antes de que la solicitud llegue incluso al handler.




