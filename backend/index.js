//Importamos las librerias
const express = require('express');
const app = express();
const path = require('path');

//Configurtaciones
app.set('port', 5000); //Definimos el puerto
//app.set('views', path.join(__dirname, 'views')); //Indicamos donde estan las vistas

//Archivos estaticos (iconos, js, css, etc...)
//Buscamos en la carpeta 'frontend' (afuera) la carpeta 'public' generada por 'svelte'
app.use(express.static(path.join(__dirname, "..", "frontend", "public"))); 

//Escuchamos el servidor
app.listen(app.get('port'), () => {
    console.log('Server started on port ', app.get('port'));
});