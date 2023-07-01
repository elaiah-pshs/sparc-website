<script>
	import { expanded } from '$lib/data/stores.js';
	import PathDisplay from '$lib/PathDisplay.svelte';

	let is_expanded;
	expanded.subscribe((value) => {
		is_expanded = value;
	});
</script>

<svelte:head>
	<title>Help</title>
</svelte:head>

<PathDisplay />

<main class={is_expanded ? " expanded" : ""}>
    <h1>How To Use This Website</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>
