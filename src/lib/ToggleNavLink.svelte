<script>
	export let name = '';
	export let children = [];
	export let indent = 0;
    export let open = false;

	function toggleOpenClick() {
		open = !open;
	}

    function toggleOpenKey(e) {
        if (e.key == "Enter")
		    open = !open;
	}
</script>

<h3 style="padding-left: {indent}px" on:click={toggleOpenClick} on:keydown={toggleOpenKey}>
	{name}
	{open ? '(open)' : '(closed)'}
</h3>

{#if open}
	{#each children as child}
		<svelte:self {...child} indent={indent + 24} />
	{/each}
{/if}

<style>
	h3 {
		cursor: pointer;
		user-select: none;
	}
</style>
