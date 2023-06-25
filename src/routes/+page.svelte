<script>
    import Navbar from '$lib/Navbar.svelte';
    import Sidebar from '$lib/Sidebar.svelte';
    import '../styles/root.scss';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<!-- move these to Headers.svelte when you make that component -->
<Navbar />
<Sidebar />

<main>
    <h1>Home</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>
