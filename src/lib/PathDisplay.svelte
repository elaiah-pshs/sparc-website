<script>
	import { expanded } from '$lib/data/stores.js';
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores'
    import { clickOutside } from '../js/clickOutside.js';
    import '../styles/PathDisplay.scss';

    let path = $page.url.pathname, current_path = '';
    let separator = `<span class="path-divider">/</span>`;
    const links = [`<a class="path-link" href="/">home</a>`];

    let dropdown_visible = false;

    // test path
    // path = "/reviewers/q1/mqe/math/coordinates";

    path.split('/').filter((str) => str !== '').forEach(element => {
        current_path += ('/' + element);
        links.push(`<a class="path-link" href="${current_path}">${element}</a>`);
    });

    function toggleDropdownClick() {
        dropdown_visible = !dropdown_visible;
    }

    function hideDropdownClick() {
        dropdown_visible = false;
    }

    function toggleDropdownKey(e) {
        if(e.key == "Enter")
            dropdown_visible = !dropdown_visible;
    }
</script>

<div class={"path" + ($expanded ? " expanded" : "")}>
    {#if links.length <= 4}
        {@html links.join(separator)}
    {:else}
        {@html links[0]}
        {@html separator}
        <span class="path-contraction" on:click={toggleDropdownClick} on:keydown={toggleDropdownKey} use:clickOutside on:click_outside={hideDropdownClick}>
            <span class="path-link">
                ...
            </span>
            {#if dropdown_visible}
                <span class="path-tooltip" transition:fade>
                    {@html links.slice(1, -2).join('')}
                </span>
            {/if}
        </span>
        {@html separator}
        {@html links.slice(-2).join(separator)}
    {/if}
</div>
