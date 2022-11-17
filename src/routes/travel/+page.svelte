<script>
	import { fade } from 'svelte/transition';
	import Gif from '../../lib/gif.svelte';
	let foo = false;
	let foo1 = false;
</script>

<svelte:head>
	<title>Travel</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Travel</h1>

<div class="flex flex-col text-2xl items-center justify-center px-60 ">
	<Gif />
	<br />

	<p>
		We are able to travel to pretty much any location in the world and have the travel gear
		necessary to expedite shoots associated with lots of travel.
	</p>
	<br />
	<p>
		Contact us today about any shoot anywhere in the world! We have seasoned sound mixers ready to
		work in any condition on any place on the planet :)
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
