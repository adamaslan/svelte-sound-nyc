<script>
	import Nav from '../lib/nav.svelte';
	import '../app.css';
</script>

<div class="p-8 max-w-6xl mx-auto flex flex-col">
	<Nav />

	<slot />
</div>
