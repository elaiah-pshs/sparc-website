<script>
    import { onMount } from 'svelte';
    import '../styles/root.scss';

    let display = "";

    onMount(() => {
        fetch("./templates/test.html")
            .then((res) => res.text())
            .then((text) => {
                display = text;
            })
            .catch((e) => console.error(e));
    });
</script>

<svelte:head>
    <title>Welcome to SPARC 2028!</title>
</svelte:head>

<!-- <main>
    {@html display}
</main> -->

<main>
	<h1>Welcome to SPARC 2028!</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>
