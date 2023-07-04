<script>
	import { expanded } from '$lib/data/stores.js';
	import PathDisplay from '$lib/PathDisplay.svelte';
</script>

<PathDisplay />

<main class={$expanded ? "expanded" : ""}>
	<slot />
</main>
