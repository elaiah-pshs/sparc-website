<script>
    import Navbar from '$lib/Navbar.svelte';
    import Sidebar from '$lib/Sidebar.svelte';
    import '../styles/root.scss';
</script>

<Navbar />
<Sidebar />
<slot />
