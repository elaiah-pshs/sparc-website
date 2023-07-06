<script>
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores'
    import { clickOutside } from '../js/clickOutside.js';
	import { toggled, expanded } from '$lib/data/stores.js';
    import NavLink from "$lib/NavLink.svelte";
    import '../styles/Topbar.scss';

    let expander;

    let path = '', dropdown_visible = false;
    let separator = `<span class="path-divider">/</span>`;
    const links = [`<a class="path-link" href="/">home</a>`];

    $page.url.pathname.split('/').filter((str) => str !== '').forEach(element => {
        path += ('/' + element);
        links.push(`<a class="path-link" href="${path}">${element}</a>`);
    });
    
    function toggleSidebar() {
        toggled.update((n) => !n);
    }

    function expandSidebarClick() {
        expanded.update((n) => !n);
    }

    function expandSidebarKey(e) {
        if (e.key == "Enter")
            expanded.update((n) => !n);
    }

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

<ul class={"topbar" + ($expanded ? " expanded" : "")}>
    <li
        class="topbar-item"

        on:mouseover={toggleSidebar}
        on:focus={toggleSidebar}
        on:mouseout={toggleSidebar}
        on:blur={toggleSidebar}

        on:click={expandSidebarClick}
        on:keydown={expandSidebarKey}
    >
        <img
            class={"topbar-link topbar-icon" + ($expanded ? " expanded" : "")}
            src={$expanded || $toggled ? "/icons/expand_sidebar.svg" : "/icons/sidebar.svg"}
            alt="Open sidebar"
            bind:this={expander}
        />
    </li>

    <li class="path">
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
    </li>

    <li class="topbar-item">
        <NavLink location="topbar" href="/" text="Apply now!" />
    </li>

    <li class="topbar-divider"></li>

    <li class="topbar-item">
        <NavLink location="topbar" href="/about" src="/icons/placeholder.svg" alt="About Us" text={false} />
    </li>

    <li class="topbar-item">
        <NavLink location="topbar" href="/help" src="/icons/placeholder.svg" alt="Help" text={false} />
    </li>

    <li class="topbar-item">
        <NavLink location="topbar" href="/report" src="/icons/placeholder.svg" alt="Report an Issue" text={false} />
    </li>
</ul>
