<script>
	export let title;
	export let description;
	export let path = '/';
	export let image = '/nova-2-hero.jpg';

	const SITE = 'https://nycsoundguy.com';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={SITE + path} />
	<meta property="og:site_name" content="NYC Sound Guy" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={SITE + path} />
	<meta property="og:image" content={SITE + image} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
