<script>
	import { reveal } from './motion.js';

	// `logo` is a file in static/logos. Clients without one are shown as a text wordmark.
	const clients = [
		{ name: 'Vice', logo: 'vice.svg' },
		{ name: 'Complex' },
		{ name: 'Google', logo: 'google.svg' },
		{ name: 'Verizon', logo: 'verizon.svg' },
		{ name: 'Time' },
		{ name: 'Condé Nast' },
		{ name: 'InStyle Magazine' },
		{ name: 'Nylon' },
		{ name: 'Livestream', logo: 'livestream.svg' },
		{ name: 'PBS', logo: 'pbs.svg' },
		{ name: 'Netflix', logo: 'netflix.svg' },
		{ name: 'Hulu', logo: 'hulu.svg' },
		{ name: 'Smithsonian' },
		{ name: 'Radical Media' },
		{ name: 'Adult Swim' },
		{ name: 'Lifetime' },
		{ name: 'Discovery Channel' }
	];
</script>

<ul class="client-grid" use:reveal>
	{#each clients as client}
		<li class="client">
			{#if client.logo}
				<img src="/logos/{client.logo}" alt={client.name} loading="lazy" />
			{:else}
				<span class="wordmark">{client.name}</span>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.client-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	@media (min-width: 640px) {
		.client-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.client-grid {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}
	.client {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 5rem;
		padding: 0.75rem 1rem;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		filter: grayscale(1);
		opacity: 0.8;
		transition: opacity 0.2s ease;
	}
	.client:hover {
		opacity: 1;
	}
	.client img {
		max-height: 2rem;
		max-width: 100%;
		width: auto;
		object-fit: contain;
	}
	.wordmark {
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-size: 0.8rem;
		text-align: center;
		color: #374151;
	}
</style>
