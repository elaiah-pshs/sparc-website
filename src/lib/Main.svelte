<script>
	import { expanded } from '$lib/data/stores.js';
</script>

<main class={$expanded ? "expanded" : ""}>
	<slot />
</main>
