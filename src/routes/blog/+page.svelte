<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';
</script>

<h1 class="text-4xl text-center my-8 uppercase">NYC Sound Blog</h1>
<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<p>
		Welcome to our very informative blog on all things including and adjacent to location sound for
		film, commercials, and TV!
	</p>
	<br />
	<p>
		Checkout our article on
		<a href="/Zaxcom"><u>Zaxcom</u> </a> to find out more on one of the industry's leading brands.
		<br />
	</p>
	<br />
	<p>
		We have a ton of great things to share about our mixers, the gear, the places we go to, and the
		industry in general!<br />
		<br />
		To book one of our mixers and all the sound gear that is needed for the shoot contact us today!
	</p>
	<br />
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
