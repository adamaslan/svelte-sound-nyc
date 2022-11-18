<script>
	import { fade } from 'svelte/transition';
	let foo = false;
	let foo1 = false;
</script>

<svelte:head>
	<title>Gear</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Gear</h1>
<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<p class="text-2xl max-w-2xl">
		We pride ourselves in being able to supply all gear necessary for whatever a specific film shoot
		calls for. In addition to this we use the best gear in location sound. <br />
		<br />
		Brands we use include: <br /> Zaxcom
		<br />
		Sound Devices <br />
		Lectrosonics <br /> Sanken <br /> Sennheiser <br /> Ktek <br /> DPA
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
