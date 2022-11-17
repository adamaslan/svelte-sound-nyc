<script>
	import { fade } from 'svelte/transition';
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
	<button on:click={() => alert('8432843462')} transition:fade>
		Click <u class="hover:max-w-lg"> here </u> get our number
	</button>
	<br />
	<button class="hover:max-w-lg" on:click={() => alert('nycsoundpeople@gmail.com')} transition:fade>
		Click <u class="hover:max-w-lg">here </u> to get our email
	</button>{' '}
</div>
