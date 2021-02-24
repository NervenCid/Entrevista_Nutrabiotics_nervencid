//En este archivo definiremos la gestion del estado de la aplicacion

//Importamos un 'store' que puede ser leido y escrito
import {writable} from 'svelte/store';

//Exportamos el 'store'
export let loading = writable(false);
export let products = writable([]);