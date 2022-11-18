<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';
</script>

<h1 class="text-4xl text-center my-8 uppercase">About NYC Sound Guy</h1>
<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<p>
		NYC SOUND GUY is a service that connects productions to many of the most talented sound mixers
		out there.
		<br />
		<br /> We are in direct contact with all the sound mixers on this page as to their availability
		and rates. Feel free to contact us with any nyc sound mixer needs you may have. Even if all the
		sound mixers we have listed are busy there are a ton of other New York City sound mixers we know
		that we can confirm are available at a rate fair to any type of production. <br />
		<br />
		Contact us today!
	</p>
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
