<!--Aqui va la logica del componente-->
<script>

    //Importamos el 'store' de los estados
    import { loading , products} from '../store.js';

    //Imnportamos el componente 
    import ProductItem from './ProductItem.svelte';

</script>

<!--Creamos un 'div' que contendra los componentes-->
<div class="product-container">

    <!--Mostramos un mensaje de carga-->
    {#if $loading}
        <h2 class="loading-text" >Buscando...</h2>
    {/if}

    <!--Hacemos una iteracion en 'products' y renderizamos un componente 'ProductItem'
    por cada 'product'-->
    {#each $products as product}
        <ProductItem product={product} />
    {/each}
    
</div>

<!--Aqui van los estilos del componente-->
<style>

    .product-container {
        max-width: 1000px;
        padding: 10px 0;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
        grid-gap: 15px;
    }

    .loading-text{
        text-align: center;
    }

</style>