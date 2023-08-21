<script>
    // Legend for link types:

    // - First character indicates location
    // - For a toggle link, second character indicates whether the link is
    //   toggled by a click on an arrow-shaped toggler arrow or a click on the
    //   link itself
    // - For a normal link, characters after the first signify the presence of
    //   certain elements in the link

    // u - link is in the topbar
    // l - link is in the sidebar
    // p - link is in the path display in the topbar

    // a - toggle link expands with a click on an arrow icon
    // e - toggle link expands with a click on the element itself

    // s - toggle disappears when something outside it is clicked (soft toggle)

    // i - link has icon
    // t - link has text

    export let type;
	export let href;
	export let src = "";
	export let alt = "";
    
    export let open = true;
	export let children = {};

    import { fade } from 'svelte/transition';
	import { path_toggled } from '../scripts/stores.js';
    import NavLink from "./NavLink.svelte";

    let location = {"u": "topbar", "l": "sidebar", "p": "path"}[type[0]];
    let has_children = (JSON.stringify(children) != "{}");
    
    function toggleClick() {
        open = !open;
	}

    function togglePathClick() {
        path_toggled.update(n => !n);
	}

    function toggleKey(e) {
        if (!open && e.key == "Enter") { open = !open; }
	}

    function togglePathKey() {
        if (!open && e.key == "Enter") { path_toggled.update(n => !n); }
	}
</script>

{#if has_children && type.indexOf('a') != -1}
    <div class={location + "-arrow"}>
        <img
            class={location + "-toggler" + (open ? " rotated" : "")}
            src="/icons/toggle_link.svg"
            alt="Toggle open"

            on:click={toggleClick}
            on:keydown={toggleKey}
        />

        <NavLink type={type} href={href} src={src} alt={alt} />
    </div>
{:else if type.indexOf('e') != -1}
    <div on:click={togglePathClick} on:keydown={togglePathKey}>
        <NavLink type={type} href={href} src={src} alt={alt} />
    </div>
{:else if type.indexOf('a') != -1}
    <div class={location + "-leaf"}>
        <NavLink type={type} href={href} src={src} alt={alt} />
    </div>
{:else}
    <NavLink type={type} href={href} src={src} alt={alt} />
{/if}

{#if has_children && ((open && type.indexOf('e') == -1) || (type.indexOf('e') != -1 && $path_toggled))}
    <div class={location + "-toggle"} transition:fade|global>
        {#each Object.entries(children) as [key, value], index (key)}
            <svelte:self type={type} open={false} {...value} />
        {/each}
    </div>
{/if}
