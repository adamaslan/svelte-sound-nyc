<script>
	import { fade } from 'svelte/transition';
	import Gif from '../../lib/gif.svelte';
	let foo = false;
	let foo1 = false;
</script>

<svelte:head>
	<title>Services</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Services</h1>
<div class="p-8 max-w-6xl mx-auto flex flex-col justify-center align-middle">
	<Gif />
	<br />

	<p>
		We specialize in all the services associated with location film sound.
		<br />
		<br />
		Sound Mixing / Recording, Boom Operating, and Sound Utility are the 3 main types of services usually
		requested. <br />
		<br />
		Many of the sound mixers listed on NYC Sound Guy have other sound related services they offer from
		live event AV support to post sound services. <br />
		<br /> Contact us at nycsoundpeople@gmail.com with any audio related question you may have. We
		are happy to offer a free consulation for any sound related inquiries.
		<br />
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
