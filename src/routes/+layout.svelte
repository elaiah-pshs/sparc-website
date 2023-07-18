<script>
	import { sidebar_expanded } from '../scripts/stores.js';
    import { page } from '$app/stores'
	import Topbar from '$lib/Topbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../styles/root.scss';
</script>

{#key $page.url.pathname}
	<Topbar />
{/key}

<Sidebar />

<div class="wrapper">
	<div class={"ghost" + ($sidebar_expanded ? " expanded" : "")}></div>
	<slot />
</div>	
