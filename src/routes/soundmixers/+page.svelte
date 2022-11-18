<script>
	import { fade } from 'svelte/transition';
	import Gif from '../../lib/gif.svelte';
	let foo = false;
	let foo1 = false;
</script>

<svelte:head>
	<title>Sound Mixers</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Sound Mixers</h1>
<div class="flex flex-col text-2xl items-center justify-center px-60 ">
	<p>
		To get our email =>
		{#if foo}
			<button in:fade={{ delay: 500 }} out:fade on:click={() => (foo = !foo)}
				><u>THANKS for clicking</u></button
			>
		{:else}
			<button
				in:fade={{ delay: 500 }}
				out:fade
				on:click={() => (foo = !foo)}
				on:click={() => alert('nycsoundpeople@gmail.com')}><u>Click Here</u></button
			>
		{/if}
	</p>
	<p>
		To get our number =>
		{#if foo1}
			<button in:fade={{ delay: 500 }} out:fade on:click={() => (foo1 = !foo1)}
				><u>THANKS for clicking</u></button
			>
		{:else}
			<button
				in:fade={{ delay: 500 }}
				out:fade
				on:click={() => (foo1 = !foo1)}
				on:click={() => alert('6176869710')}><u>Click Here</u></button
			>
		{/if}
	</p>
	<br />
	Hit us up to work with the following top notch soundmixers:
	<br />

	<br />
	<a href="/Billpierce">Bill Pierce </a>
	<br />
	<br />
	<a href="/MichaelMoote">Michael Moote </a>
	<br />
	<br />
	<a href="/AllistairJohnson">Allistair Johnson </a>
	<br />
	<br />
	<a href="/BrettAinslie">Brett Ainslie </a>
	<br />
	<br />
	<a href="/Adamaslan">Adam Aslan </a>
	<br />
	<br />
	<a href="/JoePfeil">Joe Pfeil </a>
	<br />
	<br />
	<a href="DrewJoy">Drew Joy </a>
	<br />

	<br /> <br />
	<p class="text-2xl max-w-2xl">
		<Gif />
		<br />
	</p>
</div>
