<script>
	import Main from '$lib/Main.svelte';
    export let data;
</script>

<svelte:head>
	<title>Reviewers</title>
</svelte:head>

<Main>
    <h1>{data.material.title}</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Main>
