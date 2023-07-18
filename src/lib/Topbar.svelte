<script>
    import { page, navigating } from '$app/stores'
    import { clickOutside } from '../scripts/clickOutside';
    import { pages, findPage } from '../scripts/pages.js';
	import { path_toggled, sidebar_toggled, sidebar_expanded } from '../scripts/stores.js';
    import NavLink from "$lib/NavLink.svelte";
    import Toggle from "$lib/Toggle.svelte";
    import '../styles/Topbar.scss';
    import '../styles/PathDisplay.scss';

    let data, dropdown;

    const path = [], temp = [];
    const links = [{
        "type": "pit",
        "href": "/",
        "src": "/icons/placeholder.svg",
        "alt": "Home"
    }];

    $page.url.pathname.split('/').filter((str) => str !== '').forEach(element => {
        path.push(element);
        data = {...findPage(path, pages)};
        delete data.children;
        data.type = "pit";
        temp.push(data);
    });

    if (temp.length <= 3) {
        links.push(...temp);
    }
    else {
        dropdown = {
            "type": "pest",
            "href": "javascript:void(0)",
            "alt": "...",
            "children": {}
        };

        temp.slice(0, -2).forEach((link) => {
            dropdown.children[link.href.split('/').slice(-1)[0]] = link;
        });

        links.push(dropdown, temp.slice(-2)[0], temp.slice(-1)[0]);
    }

    $: if($navigating) {
        path_toggled.set(false);
    }
    
    function toggleSidebar() {
        sidebar_toggled.update((n) => !n);
    }

    function expandSidebarClick() {
        sidebar_expanded.update((n) => !n);
    }

    function expandSidebarKey(e) {
        if (e.key == "Enter") { sidebar_expanded.update((n) => !n); }
    }

    function closePathToggle() {
        path_toggled.set(false);
    }
</script>

<ul class={"topbar" + ($sidebar_expanded ? " expanded" : "")}>
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
            class={"topbar-link topbar-icon" + ($sidebar_expanded ? " expanded" : "")}
            src={$sidebar_expanded || $sidebar_toggled ? "/icons/expand_sidebar.svg" : "/icons/sidebar.svg"}
            alt="Open sidebar"
        />
    </li>

    <li class="topbar-item">
        <ul class="path">
            {#each links as link}
                {#if link.type == "pest"}
                    <li class="path-item" use:clickOutside on:click_outside={closePathToggle}>
                        <Toggle {...link} />
                    </li>
                {:else}
                    <li class="path-item">
                        <Toggle {...link} />
                    </li>
                {/if}
                
                <span class="path-divider">/</span>
            {/each}
        </ul>
    </li>

    <li class="topbar-item">
        <NavLink type="ut" href="/" alt="Apply now!" />
    </li>

    <li class="topbar-divider"></li>

    <li class="topbar-item">
        <NavLink type="ui" href="/about" src="/icons/placeholder.svg" alt="About Us" />
    </li>

    <li class="topbar-item">
        <NavLink type="ui" href="/help" src="/icons/placeholder.svg" alt="Help" />
    </li>

    <li class="topbar-item">
        <NavLink type="ui" href="/report" src="/icons/placeholder.svg" alt="Report an Issue" />
    </li>
</ul>
