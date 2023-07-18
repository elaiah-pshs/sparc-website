<script>
    export let data;
    import { onMount } from 'svelte';
    import { navigating } from '$app/stores';

    let display = "";

    onMount(() => {
        fetch(data.material.href + "/content.html")
            .then((res) => res.text())
            .then((text) => {
                display = text;
            })
            .catch((err) => console.error(err));
    });

    $: if($navigating) {
        fetch(data.material.href + "/content.html")
            .then((res) => res.text())
            .then((text) => {
                display = text;
            })
            .catch((err) => console.error(err));
    }
</script>

<svelte:head>
	<title>Reviewers</title>
</svelte:head>

<main>
    <h1>{data.material.alt}</h1>

    {@html display}
</main>
