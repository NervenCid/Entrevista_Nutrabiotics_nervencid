# Entrevista_Nutrabiotics_nervencid

Backend hecho en node.js, solo tiene el proposito de servir el frontend, no hay base de datos y se utilizó la API de google books

## Instrucciones para ejecutar

Primero copiar el repositorio:

`> git clone https://github.com/NervenCid/Entrevista_Nutrabiotics_nervencid.git` 

### Con svelte

Para ejecutar en el modo dev primero instalar las dependencias:

`> cd frontend && npm install` 

Luego ejecutar:

`> npm run dev` 

### Con Docker

Para construir la imagen:

`> > docker build -t <image_name> .` 

Y ejecutar el imagen en el puerto 5000:

`> docker run -it --publish 5000:5000 <image_name>` 

### Con el backend de node.js

Instalar las dependencias (no olvidar instalarlas en el frontend tambien):

`> cd backend && npm install` 

Luego ejecutar:

`> npm run start` 