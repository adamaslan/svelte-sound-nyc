<script>
	let current = '/';
</script>

<nav class="flex justify-center w-full">
	<a
		class="mx-4 text-3xl {current === '/' ? 'selected' : ''}"
		on:click={() => (current = '/')}
		href="/">Home</a
	>
	<a
		class="mx-4 text-3xl {current === 'about' ? 'selected' : ''}"
		on:click={() => (current = 'about')}
		href="/about">About</a
	>
	<a
		class="mx-4 text-3xl {current === 'blog' ? 'selected' : ''}"
		on:click={() => (current = 'blog')}
		href="/blog">Blog</a
	>
	<a
		class="mx-4 text-3xl {current === 'services' ? 'selected' : ''}"
		on:click={() => (current = 'services')}
		href="/services">Services</a
	>

	<a
		class="mx-4 text-3xl {current === 'soundmixers' ? 'selected' : ''}"
		on:click={() => (current = 'soundmixers')}
		href="/soundmixers">Sound Mixers</a
	>

	<a
		class="mx-4 text-3xl {current === 'experience' ? 'selected' : ''}"
		on:click={() => (current = 'experience')}
		href="/experience">Experience</a
	>

	<a
		class="mx-4 text-3xl {current === 'gear' ? 'selected' : ''}"
		on:click={() => (current = 'gear')}
		href="/gear">Gear</a
	>

	<a
		class="mx-4 text-3xl {current === 'travel' ? 'selected' : ''}"
		on:click={() => (current = 'travel')}
		href="/travel">Travel</a
	>
</nav>

<style>
	.selected {
		background-color: #deda6a;
		color: white;
	}
</style>
