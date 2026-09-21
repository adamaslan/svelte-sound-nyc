<script>
	// @ts-nocheck

	import Gif from '../lib/gif.svelte';
	import { reveal, parallax, safeFade } from '../lib/motion.js';

	let showEmail = false;
	let showNumber = false;
</script>

<svelte:head>
	<title>NYC Sound Guy</title>
</svelte:head>

<section class="hero relative overflow-hidden rounded-lg my-8">
	<img
		use:parallax={0.2}
		class="absolute inset-0 w-full h-full object-cover"
		src="https://res.cloudinary.com/adamaslan/image/upload/v1653499897/nycsoundguy/moote_skmxsw.jpg"
		alt="Location sound mixer working on a NYC film set"
	/>
	<div class="relative bg-white/85 p-8 md:p-16 max-w-3xl">
		<h1 class="text-4xl md:text-6xl font-bold" use:reveal>NYC Sound Guy</h1>
		<h2 class="text-2xl md:text-3xl my-6" use:reveal={{ delay: 120 }}>
			NYC's only free booking agency for sound professionals.
		</h2>
		<a
			href="/services"
			class="inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
			use:reveal={{ delay: 240 }}>Our services</a
		>
	</div>
</section>

<div class="container mx-auto px-4 max-w-screen-2xl">
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		<div class="card text-xl" use:reveal>
			<p>
				We love to help you find sound professionals for film, television, location sound, podcast,
				and web content.
			</p>
			<p class="mt-4">
				We may even be able to find sound technicians for podcasts or recording live music.
			</p>
			<p class="mt-4">To hear about our services click <a href="/services"><u>here</u></a></p>
		</div>

		<div class="card" use:reveal={{ delay: 100 }}>
			<img
				src="https://res.cloudinary.com/adamaslan/image/upload/v1653500034/nycsoundguy/brettainslie_xjkvzy.jpg"
				alt="Brett Ainslie, sound mixer"
				class="rounded-md w-full h-auto object-cover"
			/>
		</div>

		<div class="card" use:reveal={{ delay: 200 }}>
			<img
				src="https://res.cloudinary.com/adamaslan/image/upload/v1653434876/nycsoundguy/Allistair_zy6ipi.jpg"
				alt="Allistair Johnson, sound mixer"
				class="rounded-md w-full h-auto object-cover"
			/>
		</div>

		<div class="card text-xl" use:reveal>
			<p>
				To get our email =>
				{#if showEmail}
					<button in:safeFade={{ delay: 500 }} out:safeFade on:click={() => (showEmail = !showEmail)}
						><u>THANKS for clicking</u></button
					>
				{:else}
					<button
						in:safeFade={{ delay: 500 }}
						out:safeFade
						on:click={() => (showEmail = !showEmail)}
						on:click={() => alert('nycsoundpeople@gmail.com')}><u>Click Here</u></button
					>
				{/if}
			</p>
			<p class="mt-4">
				To get our number =>
				{#if showNumber}
					<button in:safeFade={{ delay: 500 }} out:safeFade on:click={() => (showNumber = !showNumber)}
						><u>THANKS for clicking</u></button
					>
				{:else}
					<button
						in:safeFade={{ delay: 500 }}
						out:safeFade
						on:click={() => (showNumber = !showNumber)}
						on:click={() => alert('6176869710')}><u>Click Here</u></button
					>
				{/if}
			</p>
		</div>

		<div class="card text-xl" use:reveal={{ delay: 100 }}>
			<p>NYC Sound Guy makes it easy to work with the best film sound people in NYC.</p>
			<p class="mt-4">
				Contact us to get a quote to hire a location sound mixer and all the gear necessary for
				your shoot.
			</p>
			<p class="mt-4">To hear more about us click <a href="/about"><u>here</u></a></p>
		</div>

		<div class="card" use:reveal={{ delay: 200 }}>
			<Gif />
			<p class="mt-4 text-xl">
				To meet some of our sound professionals click <a href="/soundmixers"><u>here</u></a>
			</p>
		</div>

		<div class="card text-xl md:col-span-2" use:reveal>
			<p>Contact us today! Fill out the form at the bottom of the page for a rapid response!</p>
			<p class="mt-4">
				To find out more about some of the companies we've worked with click
				<a href="/experience"><u>here</u></a>
			</p>
		</div>

		<div class="card text-2xl" use:reveal={{ delay: 100 }}>
			<p>Thanks for visiting us!</p>
			<p class="mt-4">We hope we can be of service :)</p>
		</div>
	</div>
</div>

<style>
	.hero {
		min-height: 60vh;
		display: flex;
		align-items: center;
	}
</style>
