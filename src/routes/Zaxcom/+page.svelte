<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';
	import Gif from '../../lib/gif.svelte';
</script>

<svelte:head>
	<title>Zaxcom</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Zaxcom</h1>

<div class="flex flex-col text-2xl items-center justify-center px-60 ">
	<Gif />
	<br />

	<p>
		Zaxcom is one of the best brands in location sound. They sell mixers, recorders, transmitters,
		recievers, ifb, and other cruicial sound gear needed for film shoots on location. They're gear
		works great in NYC even with all the RF!
	</p>
	<br />
	<p>
		Zaxcom is known for the Nomad, which both records and mixes audio. The nomad also can transmit a
		wifi signal to be used to send audio to camera or to be used with ifb.
	</p>
	<br /> <br />
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
</div>
