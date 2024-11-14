<script>
	import { fade } from 'svelte/transition';
	let foo1 = false;
</script>

<svelte:head>
	<title>Joe Pfeil - Sound Mixer</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Joe Pfeil</h1>

<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<img
		src="https://res.cloudinary.com/adamaslan/image/upload/v1653501229/nycsoundguy/pfeil_u7yges.jpg"
		alt="Joe Pfeil"
		class="mb-4"
	/>
	<p>
		With over 10 years of experience in location sound engineering, Joe Pfeil is the owner/operator
		of State of Sound LLC.
	</p>
	<p>
		Born and raised in Alaska, Joe has worked extensively across the country as an audio engineer
		for the film, TV, and video game industries.
	</p>
	<p>
		Outside of video production, Joe has worked for 8 years as an Alaskan commercial fisherman and
		has participated in Yukon and Arctic expeditions, surveying and marking 100 miles of the
		Alaska/Canada border.
	</p>
</div>

<p class="text-center mt-4">
	To contact Joe =>
	<button
		in:fade={{ delay: 500 }}
		out:fade
		on:click={() => {
			if (!foo1) alert('joepfeil@gmail.com');
			foo1 = !foo1;
		}}
	>
		<u>{foo1 ? 'THANKS for clicking' : 'Click Here'}</u>
	</button>
</p>
