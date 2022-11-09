<script>
	import Gif from '../lib/gif.svelte';
</script>

<svelte:head>
	<title>NYC Sound Guy</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">NYC Sound Guy</h1>

<div class="flex flex-col items-center justify-center ">
	<p>
		Our booking and consulatation services are FREE to all productions seeking one of our sound
		services.{' '}
	</p>
	<Gif />
	<p>
		Welcome to NYC Sound Guy, the home of world's only website exclusively dedicated to booking
		sound professionals for film, television, and web content. <br />NYC Sound Guy makes it easy to
		work with the best film sound people in NYC.
	</p>

	<br />
	<button on:click={() => alert('8432843462')}> Click here to get our number </button>
	<br />
	<button on:click={() => alert('nycsoundpeople@gmail.com')}>
		Click here to get our email
	</button>{' '}
</div>
