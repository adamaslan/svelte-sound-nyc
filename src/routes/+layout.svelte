<script>
	import Nav from '../lib/nav.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';

	let colors = ['#fff989', '#89d9ff'];
	let deg = Math.random;
	$: degString = `${deg}deg`;
</script>

<div
	class="p-8 max-w-screen-2xl mx-auto flex flex-col 	--deg: {degString};
		background "
	transition:fade
>
	<Nav />

	<slot />
</div>

<style>
	.background {
		background: linear-gradient(90deg, #acb08c, rgb(211, 233, 255));
		display: flex;
	}
</style>
