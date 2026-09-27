<script>
	// @ts-nocheck

	import Gif from '../lib/gif.svelte';
	import { reveal, parallax, safeFade } from '../lib/motion.js';

	let showEmail = false;
	let showNumber = false;
	import Seo from '../lib/Seo.svelte';
	import ClientLogos from '../lib/ClientLogos.svelte';
	import { drift } from '../lib/motion.js';
</script>

<Seo
	title="NYC Location Sound Mixers for Hire | NYC Sound Guy"
	description="NYC's only free booking agency for sound professionals. Hire a location sound mixer, boom operator or sound utility for film, TV, commercials and podcasts."
	path="/"
/>

<section class="hero relative overflow-hidden rounded-lg my-8">
	<img
		use:parallax={0.5}
		class="parallax-img"
		src="https://res.cloudinary.com/adamaslan/image/upload/f_auto,q_auto,w_1600/v1653499897/nycsoundguy/moote_skmxsw.jpg"
		alt="Location sound mixer working on a NYC film set"
	/>
	<div class="hero-panel">
		<p class="text-sm uppercase tracking-widest text-gray-600" use:reveal>NYC Sound Guy</p>
		<h1 class="text-4xl md:text-6xl font-bold mt-2" use:reveal={{ delay: 80 }}>
			Location Sound Mixers for Hire in NYC
		</h1>
		<h2 class="text-2xl md:text-3xl my-6" use:reveal={{ delay: 160 }}>
			NYC's only free booking agency for sound professionals.
		</h2>
		<div class="flex flex-wrap gap-3" use:reveal={{ delay: 240 }}>
			<a
				href="#contact"
				class="inline-block border border-black bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition"
				>Get a quote</a
			>
			<a
				href="/services"
				class="inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
				>Our services</a
			>
		</div>
	</div>
</section>

<div class="container mx-auto px-4 max-w-screen-2xl">
	<section class="my-12">
		<h2 class="text-3xl font-bold mb-2" use:reveal>Sound for film, TV, commercials and podcasts</h2>
		<p class="text-xl mb-6 max-w-3xl" use:reveal>
			Our NYC sound mixers bring the people and the gear for whatever the shoot calls for.
		</p>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="card" use:reveal>
				<h3 class="text-xl font-bold mb-2">Sound mixing</h3>
				<p>Production sound mixers and recordists for narrative, reality, documentary and commercial shoots.</p>
			</div>
			<div class="card" use:reveal={{ delay: 80 }}>
				<h3 class="text-xl font-bold mb-2">Boom operating</h3>
				<p>Boom operators to capture clean dialogue on set, on location and on the move.</p>
			</div>
			<div class="card" use:reveal={{ delay: 160 }}>
				<h3 class="text-xl font-bold mb-2">Sound utility</h3>
				<p>Sound utility support to keep the sound department running smoothly on bigger shoots.</p>
			</div>
			<div class="card" use:reveal={{ delay: 240 }}>
				<h3 class="text-xl font-bold mb-2">Live and post sound</h3>
				<p>Many of our mixers also offer live event AV support and post sound services.</p>
			</div>
		</div>
		<p class="mt-6 text-xl" use:reveal>
			See all our <a href="/services"><u>services</u></a> or meet the
			<a href="/soundmixers"><u>sound mixers</u></a>.
		</p>
	</section>

	<section class="my-12">
		<h2 class="text-3xl font-bold mb-6" use:reveal>How booking works</h2>
		<div class="grid md:grid-cols-3 gap-6">
			<div class="card" use:reveal>
				<p class="text-4xl font-bold">1</p>
				<h3 class="text-xl font-bold my-2">Tell us about your shoot</h3>
				<p>Fill in the form at the bottom of the page with your dates, location and what you need.</p>
			</div>
			<div class="card" use:reveal={{ delay: 100 }}>
				<p class="text-4xl font-bold">2</p>
				<h3 class="text-xl font-bold my-2">We check with our mixers</h3>
				<p>We are in direct contact with our mixers about availability and rates, and know plenty more we can confirm.</p>
			</div>
			<div class="card" use:reveal={{ delay: 200 }}>
				<p class="text-4xl font-bold">3</p>
				<h3 class="text-xl font-bold my-2">Your mixer shows up ready</h3>
				<p>They arrive with all the sound gear the shoot needs. Booking through NYC Sound Guy is free.</p>
			</div>
		</div>
	</section>
</div>

<section class="band-dark my-12 mx-auto max-w-screen-2xl">
	<div class="grid md:grid-cols-2 items-center gap-8 p-8 md:p-12">
		<div use:reveal>
			<p class="text-sm uppercase tracking-widest text-gray-400">From the blog</p>
			<h2 class="text-3xl md:text-5xl font-bold my-4">Zaxcom Nova 2</h2>
			<p class="text-xl">
				A mixer, recorder and two receivers in one bag that weighs under four pounds. See why it
				suits location work in New York.
			</p>
			<p class="mt-6 text-lg">
				<a href="/blog/nova-2">Read the Nova 2 article</a> &nbsp;·&nbsp; <a href="/Zaxcom">Zaxcom</a>
				&nbsp;·&nbsp; <a href="/blog">All articles</a>
			</p>
		</div>
		<img
			use:drift={0.1}
			class="w-full h-auto"
			src="/nova-2-hero.jpg"
			alt="Zaxcom Nova 2 location sound mixer and recorder, front panel with five faders and display"
			loading="lazy"
		/>
	</div>
</section>

<div class="container mx-auto px-4 max-w-screen-2xl">
	<section class="my-12">
		<h2 class="text-3xl font-bold mb-2" use:reveal>Companies we've worked with</h2>
		<p class="text-xl mb-6" use:reveal>
			Productions and brands our mixers have supported. See more on the
			<a href="/experience"><u>experience</u></a> page.
		</p>
		<ClientLogos />
	</section>
</div>


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
				src="https://res.cloudinary.com/adamaslan/image/upload/f_auto,q_auto,w_800/v1653500034/nycsoundguy/brettainslie_xjkvzy.jpg"
				alt="Brett Ainslie, sound mixer"
				class="rounded-md w-full h-auto object-cover"
			/>
		</div>

		<div class="card" use:reveal={{ delay: 200 }}>
			<img
				src="https://res.cloudinary.com/adamaslan/image/upload/f_auto,q_auto,w_800/v1653434876/nycsoundguy/Allistair_zy6ipi.jpg"
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

		<div class="card text-xl" use:reveal>
			<p>NYC Sound Guy has supported productions for brands and networks across film, television and web.</p>
			<p class="mt-4">To see who we've worked with click <a href="/experience"> <u>here</u> </a></p>
		</div>

		<div class="card text-xl" use:reveal>
			<p>We supply all the gear a shoot calls for, from top brands in location sound.</p>
			<p class="mt-4">To see the gear we use click <a href="/gear"> <u>here</u> </a></p>
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
