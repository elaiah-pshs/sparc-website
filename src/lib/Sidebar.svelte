<script>
	import { expanded } from '$lib/data/stores.js';
    import NavLink from "$lib/NavLink.svelte";
    import * as reviewers from '$lib/data/reviewers.json';
    import * as practices from '$lib/data/practices.json';
    import * as others from '$lib/data/others.json';
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

<aside class={"sidebar" + ($expanded ? " expanded" : "")}>
    <div class="sidebar-header">
        <NavLink location="sidebar-header" href="/" src="/icons/placeholder.svg" alt="SPARC 2028" text />
    </div>

    <ul class="sidebar-links">
        <li class="sidebar-item">
            <NavLink location="sidebar" href="/announcements" src="/icons/placeholder.svg" alt="Announcements" text />
        </li>
        <li class="sidebar-item">
            <NavLink location="sidebar" href="/progress" src="/icons/placeholder.svg" alt="Progress Tracker" text />
        </li>
        <li class="sidebar-item">
            <NavLink location="sidebar" href="/materials" src="/icons/placeholder.svg" alt="All Materials" text />
        </li>        
    </ul>

    <nav class="sidebar-nav" bind:this={dropdowns} on:scroll={handleScroll}>
        <ul class="sidebar-dropdowns">
            <li class="sidebar-dropdown">
                <NavLink toggle open {...reviewers}/>
            </li>
            <li class="sidebar-dropdown">
                <NavLink toggle open {...practices}/>
            </li>
            <li class="sidebar-dropdown">
                <NavLink toggle open {...others}/>
            </li>
        </ul>
    </nav>
</aside>
