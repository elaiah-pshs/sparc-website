<script>
	import { sidebar_toggled, sidebar_expanded } from '../scripts/stores.js';
    import { pages } from '../scripts/pages.js';
    import NavLink from "$lib/NavLink.svelte";
    import Toggle from "$lib/Toggle.svelte";
    import '../styles/Sidebar.scss';

    let dropdowns;    
    
    function handleScroll() {
        let links = document.querySelector(".sidebar-links");
        if (dropdowns.scrollTop == 0)
            links.style.borderBottom = "2px solid #FFF0";
        else
            links.style.borderBottom = "2px solid #FFF2";
    }
</script>

<aside class={"sidebar" + ($sidebar_expanded ? " expanded" : "") + ($sidebar_toggled && !$sidebar_expanded ? " toggled" : "")}>
    <div class="sidebar-header">
        <NavLink type="hit" href="/" src="/icons/placeholder.svg" alt="SPARC 2028" />
    </div>

    <ul class="sidebar-links">
        <li class="sidebar-item">
            <NavLink type="lit" href="/announcements" src="/icons/placeholder.svg" alt="Announcements" />
        </li>
        <li class="sidebar-item">
            <NavLink type="lit" href="/progress" src="/icons/placeholder.svg" alt="Progress Tracker" />
        </li>
        <li class="sidebar-item">
            <NavLink type="lit" href="/materials" src="/icons/placeholder.svg" alt="All Materials" />
        </li>        
    </ul>

    <nav class="sidebar-nav" bind:this={dropdowns} on:scroll={handleScroll}>
        <ul class="dropdowns">
            {#each Object.entries(pages.materials.children) as [key, value], index (key)}
                <li class="dropdown">
                    <Toggle type="lait" {...value} />
                </li>
            {/each}
        </ul>
    </nav>
</aside>
