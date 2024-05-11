# Transacciones

Las transacciones son secuencias de operaciones que se ejecutan como una unidad lógica y atómica. Esto quiere decir que todas las operaciones deben ser ejecutadas con éxito para que el resto se lleven a cabo.

## Users

Vamos a retomar el proyecto que trabajamos la clase anterior para ejemplificar una transacción. Agregaremos una nueva propiedad llamada inventory al modelo User.

Este número de inventario será un dato secuencial que dependerá del último dato registrado. Para simplificar el ejemplo, supongamos que únicamente va a incrementar en 2 unidades el valor de inventario.

Podríamos pensar en una solución muy simple la cual sería que, al momento de crear un usuario, se haga la búsqueda del último registro almacenado, tomar su valor de inventario, sumarle 2 unidades y asignar el valor resultante al usuario que tratamos de crear.

✋ A pesar de que esta sería una solución bastante buena, imaginemos que no somos el único utilizando este servidor, sino que hay miles de usuarios y, casualmente, llegan dos solicitudes para creación de usuarios al mismo tiempo.

🚫 Ambas van a pedir el valor del último registro a la vez y por consiguiente, asignan el mismo valor al usuario creado y esto traería problemas.

En lugar de eso implementaremos esta búsqueda como una transacción. La finalidad de esta transacción será asegurarse que cada solicitud sea tratada como una unidad. Es decir, hasta que una de las dos solicitudes no sea completada la siguiente no será procesada.

Ahora bien, para continuar debemos definir el valor de la propiedad inventory. Para ello, necesitamos acceder a la información de la DB utilizando la transactionalEntityManager para buscar el último valor de inventario y almacenar su valor. 

Esta posee un método llamado createQueryBuilder() el cual, a su vez, cuenta con diferentes métodos para formar querys de SQL a partir de funciones y sus argumentos. Profundicemos sobre esto en el siguiente video.

## Repositorios vs EntityManager

Por ahora hemos trabajado el CRUD por medio del objeto manager de AppDataSource a partir de consultas a una colección que contiene todas las entidades de nuestra aplicación. Si bien, trabajar utilizando esta herramienta es correcto, existe una opción que es mucho más específica: los repositorios.

A grandes rasgos, un repositorio tiene la misma función que manager. Sin embargo, un repositorio limita su acción a una entidad en concreto y no sobre la colección general que las contiene. Veamos a qué nos referimos.

Empecemos por modificar los controladores que utilizan a manager para que hagan uso de Repository. 👉Lo primero que debemos hacer es generar un repositorio para cada entidad mediante el método getRepository() de AppDataSource.

Este método recibe como argumento la entidad a la cual queremos acceder y la asocia al repositorio que creamos como una constante.

```ts
const videogameRepository = AppDataSource.getRepository(Users);
const platformRepository = AppDataSource.getRepository(Plactform);
const productRepository = AppDataSource.getRepository(Product);
const characterRepository = AppDataSource.getRepository(Character);
```

## Repositorios personalizados

El manejar un repositorio que sea exclusivo de una entidad nos permite agregar métodos que únicamente sean aplicables a este repositorio y que desempeñen una tarea particular dentro de él. Por ejemplo, supongamos que en diferentes rutas y controladores, vamos a tener que realizar la búsqueda por nombre.

⚡En lugar de repetir una y otra vez la lógica de búsqueda, podríamos agregar esta funcionalidad a usersRepository y utilizarla desde allí.

Vamos a crear una nueva carpeta llamada repositories dentro de src. En esta carpeta crearemos un archivo index.ts, que va a contener todos los repositorios que creamos anteriormente, por tanto, debemos traer este fragmento de código desde el archivo de controladores.