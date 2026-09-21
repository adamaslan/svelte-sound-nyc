<script>
	import Nav from '../lib/nav.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
</script>

<div class="p-2 md:p-8 md:max-w-screen-2xl md:mx-auto flex flex-col" transition:fade>
	<Nav />

	<slot />
</div>
