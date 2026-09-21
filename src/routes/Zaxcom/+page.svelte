<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';
	import Gif from '../../lib/gif.svelte';
</script>

<svelte:head>
	<title>Zaxcom Location Sound Gear | NYC Sound Guy Blog</title>
	<meta
		name="description"
		content="Why Zaxcom mixers, recorders and wireless transmitters are a favorite of NYC location sound mixers, from the Nomad to the Nova 2."
	/>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Zaxcom</h1>

<div class="flex flex-col text-2xl items-center justify-center px-8 md:px-60">
	<Gif />
	<br />

	<p>
		Zaxcom is one of the best brands in location sound. They sell mixers, recorders, transmitters,
		receivers, IFB, and other crucial sound gear needed for film shoots on location. Their gear
		works great in NYC even with all the RF!
	</p>
	<br />
	<p>
		Zaxcom is known for the Nomad, which both records and mixes audio. The Nomad can also transmit
		a wifi signal to be used to send audio to camera or to be used with IFB.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">Why mixers choose Zaxcom</h2>
	<p>
		Most location sound work comes down to two questions: will the wireless hold up, and will the
		recording be safe? Zaxcom built its reputation on answering both. Their wireless transmitters
		can record audio internally as well as send it over the air, so if a signal drops out because
		of interference, a backup of the performance can still exist on the transmitter itself. On a
		busy New York street where every phone, television station and neighboring crew is competing for
		the same airwaves, that kind of safety net is worth a lot.
	</p>
	<br />
	<p>
		Zaxcom also designs its products to work together. Mixers, recorders, transmitters and
		receivers share a control system called ZaxNet, which lets the mixer adjust supported
		transmitters remotely instead of walking onto set to touch an actor's wireless between takes.
		That keeps the set moving and keeps the microphone where the costume department put it.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">The gear we talk about most</h2>
	<p>
		<strong>Nomad.</strong> A mixer and recorder in one portable unit. It is a common choice for
		mixers who want a full featured, bag friendly rig for documentaries, commercials and smaller
		narrative shoots.
	</p>
	<br />
	<p>
		<strong>Nova 2.</strong> The newer, more compact all-in-one: mixer, recorder, ZaxNet remote
		control and two built-in receiver slots in a package under four pounds. Read the full write up
		in our <a href="/blog/nova-2"><u>Nova 2 article</u></a>.
	</p>
	<br />
	<p>
		<strong>Transmitters and receivers.</strong> Wireless lavalier transmitters go on the actor,
		and receivers bring the signal back to the mixer. Zaxcom's slot-in receivers fit directly into
		the mixer, which removes external wiring and makes for a tidier, more reliable bag.
	</p>
	<br />
	<p>
		<strong>IFB.</strong> Interruptible foldback is how the mixer talks to the director, script
		supervisor or camera team in their headphones or earpieces, and how the mix gets sent to camera.
		Reliable IFB is one of those things nobody notices until it fails.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">Working with RF in New York City</h2>
	<p>
		New York is one of the hardest places in the world to run wireless audio. Buildings reflect
		signals, dense neighborhoods pack many transmitters into a small area, and productions often
		shoot within a block of one another. Careful frequency planning, good antenna placement and
		gear with strong filtering make the difference between a clean day and a day of dropouts. That
		is a big part of why we trust Zaxcom equipment on NYC shoots.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">Hire a mixer who knows the gear</h2>
	<p>
		Owning good gear is only half of it. Our mixers know how to plan frequencies, set up the bag for
		the location and keep sound running smoothly for the whole day. See our
		<a href="/services"><u>services</u></a> or meet the
		<a href="/soundmixers"><u>sound mixers</u></a>, then get in touch to book a shoot. Booking is
		free.
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
