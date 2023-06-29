<script>
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores'
    import { clickOutside } from '../js/clickOutside.js';
    import NavLink from "$lib/NavLink.svelte";
    import '../styles/Topbar.scss';

    let path = $page.url.pathname, current_path = '';
    let separator = `<span class="path-divider">/</span>`;
    const links = [`<a class="path-link" href="./">home</a>`];

    let topbar, expander;
    let dropdown_visible = false;

    // test path
    // path = "/reviewers/q1/mqe/math/coordinates";

    path.split('/').filter((str) => str !== '').forEach(element => {
        current_path += ('/' + element);
        links.push(`<a class="path-link" href=".${current_path}">${element}</a>`);
    });

    function toggleSidebar() {
        let sidebar = document.querySelector(".sidebar");

        if (!sidebar.classList.contains("expanded")) {
            expander.style.transition = "500ms";
            expander.src = "icons/expand_sidebar.svg";
            sidebar.classList.add("toggled");
        }   
    }

    function hideSidebar() {
        let sidebar = document.querySelector(".sidebar");

        if (!sidebar.classList.contains("expanded"))
            expander.src = "icons/sidebar.svg";

        sidebar.classList.remove("toggled");
    }

    function expandSidebarClick() {
        let sidebar = document.querySelector(".sidebar");
        let main = document.querySelector("main");

        if (sidebar.classList.contains("expanded")) {
            expander.style.transition = "none";
            expander.style.rotate = "0deg";
            sidebar.classList.remove("expanded");
            topbar.style.width = "100%";
            main.style.padding = "4rem 3rem 1rem 3rem";
        }
        else {
            expander.style.rotate = "180deg";
            topbar.style.width = "calc(100% - 13rem)";
            main.style.padding = "4rem 3rem 1rem 19rem";
            sidebar.classList.add("expanded");
        }
    }

    function expandSidebarKey(e) {
        if(e.key == "Enter") {
            let sidebar = document.querySelector(".sidebar");
            let main = document.querySelector("main");

            if (sidebar.classList.contains("expanded")) {
                expander.style.transition = "none";
                expander.style.rotate = "0deg";
                sidebar.classList.remove("expanded");
                topbar.style.width = "100%";
                main.style.padding = "4rem 3rem 1rem 3rem";
            }
            else {
                expander.style.rotate = "180deg";
                topbar.style.width = "calc(100% - 13rem)";
                main.style.padding = "4rem 3rem 1rem 19rem";
                sidebar.classList.add("expanded");
            }
        }
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

<ul class="topbar" bind:this={topbar}>
    <li
        class="topbar-item"

        on:mouseover={toggleSidebar}
        on:focus={toggleSidebar}
        on:mouseout={hideSidebar}
        on:blur={hideSidebar}

        on:click={expandSidebarClick}
        on:keydown={expandSidebarKey}
    >
        <img class="topbar-link topbar-icon" src="icons/sidebar.svg" alt="Open sidebar" bind:this={expander} />
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
        <NavLink location="topbar" href="./" text="Apply now!" />
    </li>

    <li class="topbar-divider"></li>

    <li class="topbar-item">
        <NavLink location="topbar" href="./about" src="icons/placeholder.svg" alt="About Us" text={false} />
    </li>

    <li class="topbar-item">
        <NavLink location="topbar" href="./help" src="icons/placeholder.svg" alt="Help" text={false} />
    </li>

    <li class="topbar-item">
        <NavLink location="topbar" href="./report" src="icons/placeholder.svg" alt="Report an Issue" text={false} />
    </li>
</ul>
