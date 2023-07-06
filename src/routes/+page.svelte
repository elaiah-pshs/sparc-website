<script>
	import { onMount } from 'svelte';
	import Main from '$lib/Main.svelte';

	let display = "";

    onMount(() => {
        fetch("/templates/test.html")
            .then((res) => res.text())
            .then((text) => {
                display = text;
            })
            .catch((e) => console.error(e));
    });
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Main>
	<h1>Welcome to SPARC 2028!</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	{@html display}
</Main>
