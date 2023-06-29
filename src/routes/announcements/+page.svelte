<script>
    import Topbar from '$lib/Topbar.svelte';
</script>

<Topbar />

<main>
    <h1>Announcements</h1>
    <div class="announcement">
        <h2>Test Announcement</h2>
        <h3><i>By SPARC '28</i></h3>
        <p>Hello!</p>
    </div>

    <style>
    .announcement {
    background-color: #ac4c32;
    color: white;
    border-radius: 25px;
    border: 2px solid white;
    padding: 20px;
    }
    </style>
</main>
