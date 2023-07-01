<script>
	import { expanded } from '$lib/data/stores.js';
	import PathDisplay from '$lib/PathDisplay.svelte';

	let is_expanded;
	expanded.subscribe((value) => {
		is_expanded = value;
	});
</script>

<svelte:head>
	<title>Announcements</title>
</svelte:head>

<PathDisplay />

<main class={is_expanded ? " expanded" : ""}>
    <h1>Announcements</h1>
    <div class="announcement">
        <h2>Test Announcement</h2>
        <h3><i>By SPARC '28</i></h3>
        <p>Hello!</p>
    </div>    
</main>

<style>
    .announcement {
        background-color: #ac4c32;
        color: white;
        border-radius: 25px;
        border: 2px solid white;
        padding: 20px;
    }
</style>