<script>
	// @ts-nocheck

	import Gif from '../lib/gif.svelte';
	import { fade } from 'svelte/transition';
	let foo = false;
	let foo1 = false;
	// import P5a from '../lib/p5a.svelte';
	import JotFormEmbed from '../lib/form.svelte';
</script>

<svelte:head>
	<title>NYC Sound Guy</title>
	
</svelte:head>

<h1 class="text-4xl text-center my-8  ">NYC Sound Guy</h1>
<h2 class="text-3xl text-center my-8  ">	Welcome to NYC's only free booking agency for sound professionals.</h2>
<div class="container mx-auto px-4 max-w-screen-2xl ">
	<div class="grid md:grid-cols-2 gap-4 aspect-ratio-square ">
	  <div class=" text-2xl max-w-2xl mx-auto flex flex-col bg-white shadow-lg rounded-lg p-4">
		<p>
		 We love to help you find sound
			professionals for film, television, location sound, podcast, and web content.</p><br /> <br /> <p> We may even be able to find sound technicians for podcasts or recording live music.
		</p><br /><br />
	<p>	To hear about our services click <a href="/services"> <u>here</u> </a> </p>
	</div>
	<div class="bg-white shadow-lg rounded-lg p-4 aspect-ratio-square"> <img
		src="https://res.cloudinary.com/adamaslan/image/upload/v1653499897/nycsoundguy/moote_skmxsw.jpg"
		alt="joe" class=" object-center rounded-md w-full h-auto object-cover"
	/> <br /><br />
	</div>
	<div class="bg-white shadow-lg rounded-lg p-4 aspect-ratio-square">
		
		<img
		src="https://res.cloudinary.com/adamaslan/image/upload/v1653500034/nycsoundguy/brettainslie_xjkvzy.jpg"
		alt="joe" class=" object-center rounded-md w-full h-auto object-cover"
	/> <br />
	</div>

	<div class="bg-white shadow-lg rounded-lg p-4 aspect-ratio-square text-2xl max-w-2xl mx-auto flex flex-col w-full h-auto object-cover">
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
	</div>

	<div class="text-2xl max-w-2xl mx-auto flex flex-col bg-white shadow-lg rounded-lg p-4 aspect-ratio-square w-full h-auto object-cover">
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
<div class="bg-white shadow-lg rounded-lg p-4 aspect-ratio-square text-2xl max-w-2xl mx-auto flex flex-col"> <img
	class=" object-center rounded-md w-full h-auto object-cover"
	src="https://res.cloudinary.com/adamaslan/image/upload/v1653434876/nycsoundguy/Allistair_zy6ipi.jpg"
	alt="adam"
/> <br />
</div>
	<div class="bg-white shadow-lg rounded-lg p-4 aspect-ratio-square text-2xl max-w-2xl mx-auto flex flex-col">
		NYC Sound Guy makes it easy to work with the best film sound people in NYC. 
		<br /><br /><br />Contact us to get a quote to hire a location sound mixer and all the gear necessary for
		your shoot.<br /><br /><br />
		<p>To hear more about our about us click <a href="/about"> <u>here</u> </a></p>
	</div>

    <div class="bg-white shadow-lg rounded-lg p-4  w-full h-auto object-cover aspect-ratio-square  text-2xl max-w-2xl mx-auto flex flex-col">
		<Gif />
		<br /><br />
		<p>To meet some of our sound professionals click <a href="/soundmixers"> <u>here</u> </a></p>
	</div>
	<div class="bg-white shadow-lg rounded-lg p-4 aspect-ratio-square text-2xl max-w-2xl mx-auto flex flex-col">
		<div id="p5-container"  class="w-full  object-cover" >
			Contact us today! Here:
			<!-- <P5a /> --> <JotFormEmbed />
			<br /><br />
			To find out more about some of the companies we've worked with click <a href="/experience"> <u>here</u> </a></div>
	</div>


	<div class="bg-white shadow-lg rounded-lg p-4  w-full h-auto object-cover aspect-ratio-square  text-4xl max-w-2xl mx-auto flex flex-col">To email us simply fill in the form at the bottom of the page. <br /><br /><br /><p>Thanks for visiting us! </p><br /><br /><br /><p> We hope we can be of service :) </p></div>
</div>
</div>


<!-- <div class="option-row">
		<input class="option-input" checked id="option-1" type="radio" name="options" />
		<label class="option" for="option-1">
			<span class="option__label">
				1<sub>gb</sub>
			</span>
		</label>

		<input class="option-input" id="option-2" type="radio" name="options" />
		<label class="option" for="option-2">
			<span class="option__label">
				5<sub>gb</sub>
			</span>
		</label>
	</div>

	<div class="option-row">
		<input class="option-input" id="option-3" type="radio" name="options" />
		<label class="option" for="option-3">
			<span class="option__label">
				10<sub>gb</sub>
			</span>
		</label>

		<input class="option-input" id="option-4" type="radio" name="options" />
		<label class="option" for="option-4">
			<span class="option__label">
				20<sub>gb</sub>
			</span>
		</label>
	</div> -->

<!-- 
	/* html {
		background: linear-gradient(to bottom, #4678f3, #64d6ee);
	}

	html {
		font-size: 62.5%;
		height: 100%;
		display: flex;
	}
	body {
		width: 100%;
		margin: auto;
	}

	.option-row {
		display: flex;
		justify-content: center;
		align-items: stretch;
		width: 90%;
		max-width: 400px;
		height: 150px;
		margin: auto;
		position: relative;
	} */
	/* 
	.option {
		flex-grow: 1;
		display: block;
		padding: 0.5em;
		background: #fff;
		border-radius: 0.25em;
		font-size: 4rem;
		position: relative;
		margin: 0.1em;

		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		flex-direction: column;

		cursor: pointer;

		opacity: 0.5;
		transition-duration: 0.8s, 0.6s;
		transition-property: flex-grow, opacity;
		transition-timing-function: cubic-bezier(0.98, 0, 0.22, 0.98), ease-in-out;

		&:before,
		&:after {
			content: '';
			display: block;
			border: solid 2px #64d6ee;
			visibility: visible;
		}

		&:before {
			position: absolute;
			top: 0.5em;
			right: 0.5em;
			border-radius: 50%;
			width: 0.25em;
			height: 0.25em;
		}

		&:after {
			width: 100%;
			transform-origin: 0 0;
			transform: scaleX(0.2);
			transition: inherit;
			transition-property: transform, opacity;
		}
	}

	.option-input {
		position: absolute;
		top: 0;
		z-index: -1;
		opacity: 0;

		//&:focus { outline: solid 1px red; }
	}

	.option__label {
		display: inline-block;
		text-transform: uppercase;
		font-size: 1.5em;
		font-weight: bold;

		transform-origin: left bottom;
		transform: scale(0.7);
		transition: inherit;
		transition-property: transform, opacity;

		sub {
			margin-left: 0.25em;
			font-size: 0.4em;
			display: inline-block;
			vertical-align: 0.3em;
		}
	}

	// .option-input:focus + .option {
	//   opacity: 1;
	// }

	.option-input:checked + .option {
		flex-grow: 4;
		opacity: 1;

		&::after {
			transform: scaleX(1);
		}
		&::before {
			background: #64d6ee;
		}
		.option__label {
			transform: scale(1);
		}
	} */

</script> -->

<!-- <style>
	/* Other styles... */

	.grid-container {
		display: grid;
		grid-template-columns: 50% 50%; /* Two columns, each taking 50% width */
		gap: 20px; /* Optional gap between columns */
		border: 1px solid #ddd;
	}

	.grid-item {
		text-align: justify;
		line-height: 1.5;
		/* Additional styles for individual columns (optional) */
	}
</style> -->
