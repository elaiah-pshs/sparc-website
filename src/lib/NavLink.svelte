<script>
	export let location;
	export let href;
	export let src = "";
	export let alt = "";
	export let text = "";

    export let toggle = false;
    export let open = false;
	export let children = [];
	export let indent = 1.5;
    
    function toggleOpenClick() {
		open = !open;
	}

    function toggleOpenKey(e) {
        if (e.key == "Enter")
		    open = !open;
	}
</script>

{#if toggle}
    <div class={location + "-item"}>
        {#if children[0]}
            <img
                class={location + "-toggler" + (open ? " rotated" : "")}
                src="/icons/toggle_link.svg"
                alt={"Toggle open"}
                style="margin-left: {indent - 1}rem"

                on:click={toggleOpenClick}
                on:keydown={toggleOpenKey}
            />
        {/if}

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
    </div>
    
    {#if open}
        {#each children as child}
            <svelte:self {...child} toggle indent={indent + 1} />
        {/each}
    {/if}
{:else}
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
{/if}
