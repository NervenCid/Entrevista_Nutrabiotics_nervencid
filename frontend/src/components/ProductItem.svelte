<!--Aqui va la logica del componente-->
<script>

    //Decimos que vamos a recibir una propiedad de afuera llamada 'product'
    export let product;

    //Almacenamos la 'URL' para la imagen de la miniatura
    let thumbnailUrl;

    //Almacenamos una parte de la informacion devuelta por la consulta al 'API'
    const { volumeInfo } = product;

    //Extraemos los datos de 'volumeInfo'
    const {
        title,
        authors,
        publisher,
        //description,
        publishedDate,
        imageLinks,
        previewLink} = volumeInfo;

    //Verificamos que exista la imagen
    if(imageLinks){

        //Asignamos la imagen
        const { thumbnail } = imageLinks;
        thumbnailUrl = thumbnail;

    } else {

        //De no existir asingamos una imagen generica
        thumbnailUrl = 'https://image.flaticon.com/icons/png/512/130/130304.png';

    }

</script>

<!--Creamos un 'div' que contendra los componentes-->
<!--<div class="product-item">-->
    <!--Creamos una tarjeta que mostrara el resultado de la busqueda-->
    <!--<div class="book-item">
        <h3 class="title">{title.substring(0,20)}</h3>
        <h5>{authors}</h5>
        <h5>{publisher}</h5>
        <h5>{publishedDate}</h5>-->
        <!--<p>{description.substring(0,50)}</p>-->
        <!--<img src={thumbnailUrl} alt="cover">
        <a class="preview-link" href={previewLink} target="_blank" >Preview Link</a>
    </div>
</div>-->

<!--Creamos un 'div' que contendra los componentes-->
<div class="product-item">    
    <div class="book-item">
        <h4 class="book-title">{title.substring(0,20)}</h4>
        <img src={thumbnailUrl} alt="">
        <div class="info">
            <h3 class="title">Descripcion</h3>
            <ul>
                <li>{authors}</li>
                <li>{publisher}</li>
                <li>{publishedDate}</li>
            </ul>
            <a class="preview-link" href={previewLink} target="_blank" >Leer</a>
        </div>
    </div>
</div>

<!--Aqui van los estilos del componente-->
<style>

    .product-item{
        height: 250px;
        padding: 10px;
        margin: auto;
        box-shadow: 2px 2px 10px black;
        
    }

    .book-item{
        
        transition: all 0.3s ease-out;
        display: inline-block;
        position: relative;
        overflow: hidden;    
        display: inline-block;  
        margin: auto;      
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        
    }

    .book-title{
        background: rgb(37, 140, 209);
        color: white;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
    }

    .title {
        text-align: center;
    }

    .info{
        
        background: rgba(37, 140, 209, 0.918);        
        transition: all 0.3s ease-out;
        transform: translateX(-110%);
        height: 100%;
        width: 100%;
        position: absolute;
        cursor: no-drop;
        line-height: 1.8;
        text-align: center;
        color: #FFF;        
        margin: auto;
        left: 0;
        top: 0;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        
    }

    .product-item:hover .info{transform: translateX(0);}

    img {
        height: 200px;
        width: 80%;
        display: block;
        margin: 0 auto;
    }

    .preview-link {
        color: rgb(255, 255, 255);
        display: block;
        background-color: rgb(43, 174, 226);        
        border-radius: 2px;
        text-align: center;
        margin: 10px auto;
        padding: 10px 0;
        cursor: pointer;
    }
    
    .preview-link:hover {
        background-color: rgb(61, 173, 108);
        color: white;
    }

</style>