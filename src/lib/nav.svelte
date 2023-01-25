<script>
	let showMobileMenu = false;

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
</script>

<nav>
	<div class="inner">
		<button
			class="mobile-icon"
			on:click={() => (showMobileMenu = !showMobileMenu)}
			class:showMobileMenu
		>
			<div class="middle-line" />
		</button>

		<ul class="navbar-list">
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.mobile-icon:where(:not(.showMobileMenu)) + ul {
		display: none;
	}
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
		margin: 0;
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
		background-color: inherit;
		border: none;
		text-align: left;
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
	.mobile-icon.showMobileMenu:before,
	.mobile-icon.showMobileMenu:after,
	.mobile-icon.showMobileMenu .middle-line {
		width: 100%;
	}
	.mobile-icon.showMobileMenu:before,
	.mobile-icon.showMobileMenu:after {
		top: 50%;
		transform: rotate(-45deg);
	}
	.mobile-icon.showMobileMenu .middle-line {
		transform: rotate(45deg);
	}
	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
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
		.mobile-icon + ul {
			display: flex;
			padding: 0;
		}
		.navbar-list a {
			display: inline-flex;
		}
	}
	@media only screen and (max-width: 767px) {
		.navbar-list {
			background-color: rgba(0, 0, 0, 0.8);
			position: fixed;
			display: block;
			height: calc(100% - 45px);
			bottom: 0;
			left: 0;
		}
	}
</style>
