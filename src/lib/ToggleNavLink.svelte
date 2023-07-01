<script>
	export let location;
	export let href;
	export let src;
	export let alt;
	export let text;
	
    export let open = false;
	export let children = [];
	export let indent = 0;

	import NavLink from './NavLink.svelte';

	function toggleOpenClick() {
		open = !open;
	}

    function toggleOpenKey(e) {
        if (e.key == "Enter")
		    open = !open;
	}
</script>

<NavLink location={location} href={href} src={src} alt={alt} text={text} style="padding-left: {indent}rem" on:click={toggleOpenClick} on:keydown={toggleOpenKey} />

{#if open}
	{#each children as child}
		<svelte:self {...child} indent={indent + 1.5} />
	{/each}
{/if}
