<script>
	import { onMount } from 'svelte';

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		{ label: 'NYC SOUND GUY', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Experience', href: 'experience' },
		{ label: 'Services', href: '/services' },
		{ label: 'Sound Mixers', href: 'soundmixers' },
		{ label: 'Gear', href: '/gear' },
		{ label: 'Travel', href: '/travel' },
		{ label: 'Blog', href: 'blog' }
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<nav>
	<div class="inner">
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			{#each navItems as item}
				<li>
					<a on:click={handleMobileIconClick} href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- <script>
	let current = '/';
</script>

<nav class="hidden sm:flex justify-center w-full">
	<a
		class="mx-4 md:text-3xl {current === '/' ? 'selected' : ''}"
		on:click={() => (current = '/')}
		href="/">Home</a
	>
	<a
		class="mx-4 md:text-3xl {current === 'about' ? 'selected' : ''}"
		on:click={() => (current = 'about')}
		href="/about">About</a
	>
	<a
		class="mx-4 md:text-3xl {current === 'blog' ? 'selected' : ''}"
		on:click={() => (current = 'blog')}
		href="/blog">Blog</a
	>
	<a
		class="mx-4 md:text-3xl {current === 'services' ? 'selected' : ''}"
		on:click={() => (current = 'services')}
		href="/services">Services</a
	>

	<a
		class="mx-4 md:text-3xl {current === 'soundmixers' ? 'selected' : ''}"
		on:click={() => (current = 'soundmixers')}
		href="/soundmixers">Sound Mixers</a
	>

	<a
		class="mx-4 md:text-3xl {current === 'experience' ? 'selected' : ''}"
		on:click={() => (current = 'experience')}
		href="/experience">Experience</a
	>

	<a
		class="mx-4 md:text-3xl {current === 'gear' ? 'selected' : ''}"
		on:click={() => (current = 'gear')}
		href="/gear">Gear</a
	>

	<a
		class="mx-4 md:text-3xl {current === 'travel' ? 'selected' : ''}"
		on:click={() => (current = 'travel')}
		href="/travel">Travel</a
	>
</nav>

<!-- <div class="md:hidden flex items-center">
	<button class="outline-none mobile-menu-button">
		<svg
			class="w-6 h-6 text-gray-500"
			x-show="!showMenu"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>
</div>

<div class="hidden mobile-menu">
	<ul class="">
		<li class="active">
			<a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
				>Home</a
			>
		</li>
		<li>
			<a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
				>Services</a
			>
		</li>
		<li>
			<a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
				>About</a
			>
		</li>
		<li>
			<a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
				>Contact Us</a
			>
		</li>
	</ul> -->

<!-- </div> -->
<!-- <style>
	.selected {
		background-color: #7dffe9;
		color: white; -->
<!-- } -->

<!-- </!-->
<style>
	nav {
		background-color: rgba(0, 0, 0, 0.8);
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
	}

	.inner {
		max-width: 980px;
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #424245;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 13px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
