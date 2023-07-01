<script>
	export let location;
	export let href;
	export let src = "";
	export let alt = "";
	export let text = "";

    export let dropdown = false;
    export let open = false;
	export let children = [];
	export let indent = 0;
    
    function toggleOpenClick() {
		open = !open;
	}

    function toggleOpenKey(e) {
        if (e.key == "Enter")
		    open = !open;
	}
</script>

{#if dropdown}
    <div class={location + "-toggle"} style="padding-left: {indent}rem">
        <img
            class={location + "-toggle-toggler"}
            src="icons/toggle_link.svg"
            alt={"Toggle open"}

            on:click={toggleOpenClick}
            on:keydown={toggleOpenKey}
        />

        <a class={location + "-toggle-link"} href={href}>
            {#if src != ""}
                <img class={location + "-toggle-icon"} src={src} alt={alt}>
            {/if}
            {#if text == true}
                <span class={location + "-toggle-text"}>{alt}</span>
            {:else if text != ""}
                <span class={location + "-toggle-text"}>{text}</span>
            {/if}
        </a>
    </div>
    
    {#if open}
        {#each children as child}
            <svelte:self {...child} indent={indent + 1.5} />
        {/each}
    {/if}
{:else}
    <a class={location + "-link"} href={href} style="padding-left: {indent}rem">
        {#if src != ""}
            <img class={location + "-icon"} src={src} alt={alt}>
        {/if}
        {#if text == true}
            <span class={location + "-text"}>{alt}</span>
        {:else if text != ""}
            <span class={location + "-text"}>{text}</span>
        {/if}
    </a>
{/if}
