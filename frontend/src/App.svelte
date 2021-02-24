<!--Aqui va la logica del componente-->
<script>

	//Importamos los componentes
	import NavBar from './components/NavBar.svelte';
	import SearchBar from './components/SearchBar.svelte';
	import ProductContainer from './components/ProductContainer.svelte';
	//import ProductItem from './components/ProductItem.svelte';

</script>

<!--Creamos un 'div' que contendra los componentes-->
<div class="app">
	<NavBar />
	<SearchBar />
	<ProductContainer />
</div>

<!--Aqui van los estilos-->
<style>

	:global(*){
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}
	:global(body) {
			padding: 0;
			background-color: rgba(20, 22, 23, 0.863);
	}
	.app {
		background-color: rgba(20, 22, 23, 0.637);
		width: 100vw;
		min-height: 100vh;
	}

</style>