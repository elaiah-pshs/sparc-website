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
    <title>Home</title>
</svelte:head>

<main>
    {@html display}
</main>

<!--
This script places a badge on your repl's full-browser view back to your repl's cover
page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
teal, blue, blurple, magenta, pink!
<script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
-->
