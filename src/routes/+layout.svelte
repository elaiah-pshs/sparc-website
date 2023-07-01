<script>
	import Topbar from '$lib/Topbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../styles/root.scss';
</script>

<Topbar />
<Sidebar />
<slot />
