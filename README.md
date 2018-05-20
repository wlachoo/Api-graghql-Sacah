# API GraphQL para Sacah (Sistema Automatizado de Control de Asistencia y Honorarios)


### Pasos para correr el proyecto

0. `npm install sqlite3 --build-from-source` si no tiene instalado sqlite

1. Suponiendo que se tiene instalado ya NodeJS y Yarn, abre la terminal y dirigirse hasta el directorio donde está este archivo.

2. Ejecutar el comando `yarn install` para instalar las dependencias

3. Ejecuta el comando node index.js para correr el Servidor

4. En el navegador, ve a la URL localhost:5678/graphiql para ver GraphiQL

### Pasos para crear la base de datos

1. Crea un archivo llamado db.sqlite dentro de la carpeta db

2. Desde el directorio raiz del proyecto ejecuta el comando `yarn run db:migrate` para generar la estructura en esa base de datos

3. Luego ejecuta el commando `yarn run db:seed` para generar datos en la base de datos
