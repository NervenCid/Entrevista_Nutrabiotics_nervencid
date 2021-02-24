<!--Aqui va la logica del componente-->
<script>

    //Importamos el 'store' de los estados
    import { loading , products} from '../store.js';

    //Creamos las variables
    let text = '';
    let alertMessage = '';
    let searchInput;

    //Esta funcion se ejecutara al enviar el formulario
    function handleSubmit(event){

        //Prevenimos que la pagina se recargue automaticamente
        event.preventDefault();

        //Verificamos si hay texto en la caja de busqueda
        if(!text){

            //Definimos el estado de la alerta
            setAlertMessage('Introdusca un criterio de busqueda valido');

        }else{

            //Realizamos la consulta al 'API' de 'Google'
            searchProducts();

        }
        
    }

    //Esta funcion limpia el 'input'
    function clearSearch(){
        text = '';
        products.set([]);
        searchInput.focus();
    }

    //Con esta funcion realizamos la consulta en el API de google books
    async function searchProducts(){

        //Activamos la animacion de carga
        loading.set(true);
        //Hacemos la peticion al 'API'
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`);
        //Convertimos a 'json'
        const data = await res.json();
        //Asignamos los datos con vertidos a 'json' a el 'store'
        products.set(data.items);
        //Desactivamos la animacion de carga
        loading.set(false);

    }

    //Con esta funcionEstablecemos el mensaje de alerta y su estado
    function setAlertMessage(msg){

        //Asignamos al estado
        alertMessage = msg;
        //Desaparecemos el mensaje despues de 1 segundo
        setTimeout(()=>alertMessage = '', 1000);

    }

</script>

<!--Creamos un 'div' que contendra los componentes-->
<div class="search-bar">

    <!--REnderizamos un mensaje de alerta solo si existe-->
    {#if alertMessage}
        <div class="alert">
            <h4>{alertMessage}</h4>
        </div>
    {/if}

    <!--Creamos un formulario con la busqueda
    en donde el envio del formulario ejecutara la funcion 'handleSubmit'-->
    <form on:submit={handleSubmit}>

        <!--Creamos un 'input'-->
        <!--Con 'bind:value={text}' enlazamos a la variable 'text'-->
        <!--Con 'bind:this={searchInput}'' enlazamos al elemento del DOM-->
        <input
            type="text"
            placeholder="Introduzca un criterio de busqueda"
            bind:value={text}
            bind:this={searchInput}
        >

        <!--Creamos un boton que envia el formulario-->
        <button type="submit" class="search-button">Buscar</button>

        <!--Renderizamos un boton SOLO si hay elementos en 'products'-->
        {#if $products.length > 0}
            <button class="clear-button" on:click={clearSearch}>Limpiar Busqueda</button>
        {/if}

    </form>

</div>

<!--Aqui van los estilos del componente-->
<style>

    .search-bar {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }
    form {
        display: flex;
        flex-direction: column;
        padding: 20px
    }
    input {
        min-width: 300px;
        text-align: center;
        font-size: 15px;
        border-radius: 20px;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
    }
    button{
        cursor: pointer;
        border-radius: 20px;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
    }
    .search-button {
        border: 1px solid rgb(28, 106, 158);
        color: rgba(28, 106, 158, 0.719);        
    }
    .clear-button {
        border: 1px solid red;
        color: red;        
    }
    .search-button:hover {
        background-color: rgb(28, 106, 158);
        color: white;
    }
    .clear-button:hover {
        background-color: red;
        color: white;
    }
    .alert {
        border: 1px solid red;
        border-radius: 4px;
        text-align: center;
        color: red;
        padding: 10px;
        width: 200px;
    }

</style>