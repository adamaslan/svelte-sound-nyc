<script>
	import { fade } from 'svelte/transition';

	// /**
	// 	 * @type {(arg0: HTMLButtonElement) => __sveltets_2_SvelteTransitionReturnType}
	// 	 */
	//  export let fade
	let foo = false;
	let foo1 = false;
</script>

<svelte:head>
	<title>Experience</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Experience</h1>
<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
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
	<p class="text-2xl max-w-2xl">
		Companies we have worked for include: <br /><br /> Vice <br /> Complex{' '}
		<br /> Google <br /> Verizon <br /> Time <br /> Conde Nast <br />{' '}
		Instyle Magazine <br /> Nylon <br /> Livestream <br /> PBS <br />{' '}
		Netflix <br /> Hulu <br /> Smithsonian <br /> Radical Media <br />{' '}
		Adult Swim <br /> Lifetime <br /> Discovery Channel
		<br />
		<br />
	</p>
	<br /> <br />
</div>
