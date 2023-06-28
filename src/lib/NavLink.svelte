<script>
    export let location, href, src = "", alt = "", text = "";
</script>

<a class={location + "-link"} href={href}>
    {#if src != ""}
        <img class={location + "-icon"} src={src} alt={alt}>
    {/if}
    {#if text == true}
        <span class={location + "-text"}>{alt}</span>
    {:else if text != ""}
        <span class={location + "-text"}>{text}</span>
    {/if}
</a>
