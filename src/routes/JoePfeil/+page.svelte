<svelte:head>
	<title>Joe Pfeil - Sound Mixer</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Joe Pfeil</h1>

<div class="p-8 text-2xl max-w-2xl mx-auto flex flex-col justify-center align-middle">
	<img
		src="https://res.cloudinary.com/adamaslan/image/upload/v1653501229/nycsoundguy/pfeil_u7yges.jpg"
		alt="joe"
	/> <br />
	With over 10 years experience in location sound engineering, Joe Pfeil is the owner/operator of State
	of Sound LLC.<br /> <br />Born and raised in Alaska, Joe has worked extensively across the country
	as an audio engineer for the film, TV and video game industries. <br /><br /> Outside of video
	production, Joe has worked 8 years as an Alaskan commercial fisherman. <br /><br />He also worked
	on Yukon and Arctic expeditions to land survey and provide demarcation for 100 miles of the
	Alaska/Canada border.
</div>
<p>
	To contact Joe =>
	{#if foo1}
		<button in:fade={{ delay: 500 }} out:fade on:click={() => (foo1 = !foo1)}
			><u>THANKS for clicking</u></button
		>
	{:else}
		<button
			in:fade={{ delay: 500 }}
			out:fade
			on:click={() => (foo1 = !foo1)}
			on:click={() => alert('joepfeil@gmail.com')}><u>Click Here</u></button
		>
	{/if}
</p>