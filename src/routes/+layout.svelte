<script>
	import Nav from '../lib/nav.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';

	let colors = ['#fff989', '#89d9ff'];
	let deg = 45;
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
		background: linear-gradient(90deg, rgb(253, 253, 237), rgb(255, 231, 217));
		display: flex;
	}
</style>
