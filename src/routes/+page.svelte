<script>
    import { onMount } from 'svelte';
    import '../styles/root.scss';

    let display = "";

    onMount(() => {
        fetch("./test.html")
            .then((res) => res.text())
            .then((text) => {
                display = text;
                console.log(text);
            })
            .catch((e) => console.error(e));
    });
</script>

<p>{@html display}</p>

<!--
This script places a badge on your repl's full-browser view back to your repl's cover
page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
teal, blue, blurple, magenta, pink!
<script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
-->
