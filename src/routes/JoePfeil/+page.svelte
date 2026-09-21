<script>
	import Seo from '../../lib/Seo.svelte';
	import { fade } from 'svelte/transition';
	let foo1 = false;
</script>

<Seo
	title="Joe Pfeil, NYC Sound Mixer | NYC Sound Guy"
	description="Joe Pfeil is a location sound engineer with over 10 years of experience in film and TV, owner of State of Sound LLC. Book through NYC Sound Guy."
	path="/JoePfeil"
/>

<h1 class="text-4xl text-center my-8 uppercase">Joe Pfeil, NYC Sound Mixer</h1>

<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<img
		src="https://res.cloudinary.com/adamaslan/image/upload/f_auto,q_auto,w_800/v1653501229/nycsoundguy/pfeil_u7yges.jpg"
		alt="Joe Pfeil, NYC sound mixer"
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

<p class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
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
