# E-commerce Javier Simon
Proyecto realizado para el curso de react de coderhouse donde se puede ver un ecomerce de ropa.

## Node.js
Entorno de ejecución de JavaScript, que le permite al código en js ser ejecutado en nuestra computadora.
Cuando usamos Node.js, rápidamente tenemos que instalar módulos nuevos (librerías).
Esta operación se realiza de forma muy sencilla con la herramienta npm (Node Package Manager).

### `Instalación`
1) Ingresar a: https://nodejs.org/en/
2) Descargar la última versión de Node.js
3) Ejecutar el archivo descargado y ejecutarlo
4) Corroborar si se intalo por terminal node -v

## CLI
Interfaz de línea de comandos.
React tiene su propia CLI, pero actualmente solo admite la creación de una aplicación (create-react-app). 

### `Instalacion`
    1) Ingresar a la terminal
    2) cd desktop
    3) npx create-react-app ecommerce
    4) cd ecommerce
    5) npm start

## Librerias
Bootstrap es la libreria que se eligio para darle estilo a la pagina.
Material UI fue para el icono del carrito y poder utilizar los Links.

### `Instalacion Bootstrap`
Instale Bootstrap en sus aplicaciones con Node.js con npm:
1) npm install bootstrap@5.2.2
2) npm i bootstrap-icons

### `Instalacion MUI`
1) npm install @mui/material @emotion/react @emotion/styled
2) npm install @mui/material @mui/styled-engine-sc styled-components
3) npm install @mui/icons-material

## Routing y Navegación
React no viene con un mecanismo integrado de navegación por lo que instalaremos: react-router-dom

### `React Router Instalacion`
npm install react-router-dom

### Rutas disponibles:
    1) home -> ItemListContainer
    2) catergorias (pantalones, remeras, zapatillas) -> ItemListContainer
    3) detalles -> ItemDetailContainer
    4) cart -> Cart

## Firabase
Servicio provisto por Google para satisfacer las distintas necesidades que puede tener una aplicación y su ciclo de desarrollo.
- Seguridad y autenticación
- Almacenamiento y consulta
- Hosting
- Monitoreo
- Functions y más

### Firestore
En el panel podemos acceder a firestore para empezar a diseñar nuestra capa de datos dinámicos, y poder enriquecer la app.

### `Instalación`
npm install firabase

## GIF
![proyectoJavierSimon](https://user-images.githubusercontent.com/103076956/195244313-ff3a0760-c9d0-4c22-9b9d-c3402fa38852.gif)


## Repositorio: 
https://github.com/JavierSimon/proyecto_JavierSimon.git


