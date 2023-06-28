<script>
	export let data;
	
	import Sidebar from '$lib/Sidebar.svelte';
	import '../styles/root.scss';
</script>

<Sidebar />
<slot />
