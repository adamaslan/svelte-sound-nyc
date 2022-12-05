<script>
	import Nav from '../lib/nav.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';

	let colors = ['#fff989', '#89d9ff'];
	let deg = Math.random;
	$: degString = `${deg}deg`;
</script>

<div
	class="p-2 md:p-8 md:max-w-screen-2xl md:mx-auto flex flex-col 	--deg: {degString};
		background "
	transition:fade
>
	<Nav />

	<slot />
</div>

<style>
	.background {
		background: linear-gradient(90deg, #c4f0ff, rgb(140, 186, 255));
		display: flex;
	}
</style>
