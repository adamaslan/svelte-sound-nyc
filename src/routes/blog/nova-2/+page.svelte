<script>
	let foo = false;
	let foo1 = false;
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Zaxcom Nova 2 | NYC Sound Guy Blog</title>
	<meta
		name="description"
		content="Zaxcom Nova 2 explained by working NYC location sound mixers: a mixer, recorder, ZaxNet remote control and two slot-in wireless receivers in one 3.5 lb device."
	/>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Zaxcom Nova 2</h1>

<div class="flex flex-col text-2xl items-center justify-center px-8 md:px-60">
	<img
		class="h-auto w-full max-w-4xl"
		src="/blog/nova-2.png"
		alt="Zaxcom Nova 2 location sound mixer and recorder, front panel with five faders and display"
	/>
	<br />

	<p>
		Nova 2 is an updated version of Zaxcom's Nova complete sound solution. It is a mixer, a
		recorder, a ZaxNet remote control and it has two built-in wireless receiver slots, all in one
		compact and lightweight device. Fully loaded with two slot-in receivers, Nova 2 can receive up
		to 8 transmitter signals, and it is the smallest, neatest, most complete portable sound package
		on the market today.
	</p>
	<br />
	<p>
		A fully loaded Nova 2 weighs only 3 lbs, 8 oz. Nova has built-in RF filtering, distribution,
		amplification, metering, and ZaxNet remote control. Slot-in receivers increase reliability since
		there's almost no external wiring, so you can build a Nova kit into the tiniest, lightest sound
		bag.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">Why a one-box rig matters on NYC shoots</h2>
	<p>
		Location sound in New York rarely happens in a quiet studio. We work in walk-ups, on subway
		platforms, in the back of moving vehicles, on rooftops and in crowded restaurants, often with
		little room to set down a full cart. Every cable in a sound bag is another thing that can fail,
		snag on a doorway or get bumped mid-take. A rig with the receivers built into the mixer removes
		most of that wiring, which means fewer failure points and a faster setup when the crew is
		already moving to the next location.
	</p>
	<br />
	<p>
		Weight matters just as much. A mixer who carries a bag on their shoulder for a twelve hour day
		feels every pound, and a smaller bag is easier to move through tight spaces, pack into a car or
		carry up several flights of stairs. Cutting the box count also means fewer batteries to manage
		and fewer things to power on and check before the first shot.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">What is in the box</h2>
	<p>
		<strong>Mixer.</strong> The front panel has five faders with LED rings and a screen with
		metering for the wireless channels and the outputs, so you can see what every transmitter and
		output is doing at a glance. That is the same job a larger cart-based mixer does, in a much
		smaller body.
	</p>
	<br />
	<p>
		<strong>Recorder.</strong> Nova 2 records as well as mixes, so a mixer can capture isolated
		tracks of each actor and a mix track for camera without carrying a separate recorder. Backing up
		every take in the same box that you monitor from keeps the workflow simple, and it gives the
		post production team clean, separate tracks to work with.
	</p>
	<br />
	<p>
		<strong>Wireless receivers.</strong> Two slots take slot-in receivers, and with both slots
		filled the unit can receive up to 8 transmitter signals. That covers a large share of the
		productions we work on, from a two person interview to a busy scene with several actors
		wearing lavalier microphones and a boom operator feeding the mix.
	</p>
	<br />
	<p>
		<strong>RF filtering, distribution and amplification.</strong> New York is one of the most
		crowded RF environments in the world. Built-in filtering and antenna distribution help the
		receivers pick out the signals we want among broadcast television, cellular, other crews'
		wireless and everything else in the air.
	</p>
	<br />
	<p>
		<strong>ZaxNet remote control.</strong> ZaxNet lets the mixer adjust supported transmitters
		remotely, for example changing settings on a wireless microphone on an actor without walking up
		and touching them between takes. On a fast paced set, that saves time and keeps the crew
		moving.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">Who it is for</h2>
	<p>
		Nova 2 suits the kind of work where a small bag is a real advantage: documentaries, commercials,
		corporate and branded content, run-and-gun shoots, small narrative productions, and any
		situation where the sound department has to stay as light and unobtrusive as the camera
		department. Larger productions with big cast counts may still want a bigger cart, but for
		most day to day location work in the city a kit like this covers the job.
	</p>
	<br />
	<p>
		Like the rest of the gear in our kits, it works alongside the Zaxcom transmitters and
		recorders we already trust. Read more about the brand in our article on
		<a href="/Zaxcom"><u>Zaxcom</u></a>.
	</p>
	<br />

	<h2 class="text-3xl self-start my-4">Book a mixer with a Nova 2 kit</h2>
	<p>
		Our mixers bring professional gear to every shoot in New York City. See our
		<a href="/services"><u>services</u></a> or meet the
		<a href="/soundmixers"><u>sound mixers</u></a>, then contact us to book. Booking is free.
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
