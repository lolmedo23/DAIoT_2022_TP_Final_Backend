### TP DAIOT 2022 Backend
En este repositorio se implementa el backend que obtiene los datos desde bigquery utilizando google cloud functions.

Para ejecutar el proyecto es necesario descargar el repositorio
 ejecutar los siguientes comandos
 > cd functions/  
 > npm install

y estar logueado a firebase
 > firebase login
Luego para desloguearse
 > firebase logout
Luego ejecutar 
 > npm run serve
### Mejoras
Se utilizo el siguiente comando para hacer deploy de las funciones a la nube, pero actualmente se esta utilizando de forma local. Es necesario modificar el frontend para que utilice las mismas desde la nube.
 > firebase deploy --only functions


# Comandos utilizados al crear el proyecto inicialmente
 > npm init -y
 > sudo npm i -g firebase-tools -d .
 > firebase login
 > firebase init
 > cd functions/  
 > npm install @google-cloud/bigquery
 > npm install firebase-admin;
 > npm install http;
 > npm install
 > npm run serve
 > npm install --production
 > sudo npm install -g eslint
 > npm install eslint-config-google --save-dev
 > firebase deploy --only functions
