# TypeORM

Un ORM *(Object Relational Mapping)* es un tipo de herramienta que permite la interacción entre una base de datos relacional y código estructurado en objetos de JavaScript.

TypeORM es una biblioteca para trabajar en diferentes entornos de ejecución. En nuestro caso, el de node con enfoque en TypeScript y JavaScript nos proporciona una interfaz que permite transformar objetos a tablas de una base de datos relacional.

## ¿Por qué utilizar TypeORM y qué ventajas ofrece?

Es compatible con varios gestores de bases de datos relacionales, como el ya conocido PostgreSQL, y otros como MySQL, SQLite y SQL Server, brindando flexibilidad según la necesidad del proyecto. Además, se integra con facilidad a frameworks como express.

# Instalación y Setup en un proyecto

Para trabajar con TypeORM es necesario instalar la librería junto con los complementos correspondientes a la base de datos con la cual trabaja nuestra aplicación (🚀PostgreSQL). El proceso de instalación se logra con este comando...

```
npm install typeorm --save
```

Luego instalar meta data:

```
npm install reflect-metadata --save
```

Agregar el siguiente comando a un archivo de ejecución global (como index.ts por ejemplo):

```ts
import "reflect-metadata"
```

Paso opcional (sino está instalado):

```
npm install @types/node --save-dev
```

**NOTA: Todos los drivers están en: https://typeorm.io/**

Instalar el driver de la database (para este caso PostgresSQL):

```
npm install pg --save
```
Luego hay que hacer la configuracion de TypeScript en el tsconfig.json

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

Configurar la opción (también en tsconfig.json):

```json
   "lib": ["ES6"], 
```

Crear un modulo con el nombre *data-source.ts* que incluya la siguiente información:

```ts
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [Post, Category],
    subscribers: [],
    migrations: [],
})
```

**NOTA:** Es recomendable crearlo en la carpeta *config* de nuestro proyecto

# Definición de modelos

Las entidades representan objetos reales con propiedades y relaciones. Puedes tener, por ejemplo, una entidad “Usuario” con propiedades como nombre, edad e email.

Un modelo, por su parte, corresponde a una clase de TypeScript que define cómo se verán y se comportarán las entidades en tu aplicación. Estos modelos se usan para crear, leer, actualizar y eliminar datos. 

