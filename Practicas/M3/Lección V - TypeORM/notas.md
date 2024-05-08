# TypeORM

Un ORM *(Object Relational Mapping)* es un tipo de herramienta que permite la interacción entre una base de datos relacional y código estructurado en objetos de JavaScript.

TypeORM es una biblioteca para trabajar en diferentes entornos de ejecución. En nuestro caso, el de node con enfoque en TypeScript y JavaScript nos proporciona una interfaz que permite transformar objetos a tablas de una base de datos relacional.

## ¿Por qué utilizar TypeORM y qué ventajas ofrece?

Es compatible con varios gestores de bases de datos relacionales, como el ya conocido PostgreSQL, y otros como MySQL, SQLite y SQL Server, brindando flexibilidad según la necesidad del proyecto. Además, se integra con facilidad a frameworks como express.

# Instalación y Setup en un proyecto

Para trabajar con TypeORM es necesario instalar la librería junto con los complementos correspondientes a la base de datos con la cual trabaja nuestra aplicación (🚀PostgreSQL). El proceso de instalación se logra con este comando...

```
npx typeorm init --name demoTypeORM --database postgres
```

