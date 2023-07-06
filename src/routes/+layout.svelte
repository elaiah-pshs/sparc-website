<script>
    import { page } from '$app/stores'
	import Topbar from '$lib/Topbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import PathDisplay from '$lib/PathDisplay.svelte';
	import '../styles/root.scss';
</script>

{#key $page.url.pathname}
	<Topbar />
	<Sidebar />
	<PathDisplay />
{/key}

<slot />
