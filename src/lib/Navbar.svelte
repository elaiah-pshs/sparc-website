<script>
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores'
    import { clickOutside } from '../js/clickOutside.js';
    import '../styles/Navbar.scss';

    let path_raw = $page.url.pathname, current_path = '';
    let separator = `<span class="navbar-path-divider">/</span>`;
    let dropdown_visible = false;
    const links = [`<a class="navbar-path-link" href="./">home</a>`];

    path_raw = "/reviewers/q1/mqe/math/coordinates";

    path_raw.split('/').filter((str) => str !== '').forEach(element => {
        current_path += ('/' + element);
        links.push(`<a class="navbar-path-link" href=".${current_path}">${element}</a>`);
    });

    function toggleSidebar() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.add("toggled");
    }

    function hideSidebar() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.remove("toggled");
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

<nav class="navbar">
    <ul class="navbar-items">
        <li on:mouseover={toggleSidebar} on:focus={toggleSidebar} on:mouseout={hideSidebar} on:blur={hideSidebar} class="navbar-item">
            <img class="navbar-icon sidebar-toggle" src="icons/sidebar.svg" alt="Open sidebar">
        </li>
        <li class="navbar-path">
            {#if links.length <= 4}
                {@html links.join(separator)}
            {:else}
                {@html links[0]}
                {@html separator}
                <span class="navbar-path-contraction" on:click={toggleDropdownClick} on:keydown={toggleDropdownKey} use:clickOutside on:click_outside={hideDropdownClick}>
                    <span class="navbar-path-link">
                        ...
                    </span>
                    {#if dropdown_visible}
                        <span class="navbar-path-tooltip" transition:fade>
                            {@html links.slice(1, -2).join('')}
                        </span>
                    {/if}
                </span>
                {@html separator}
                {@html links.slice(-2).join(separator)}
            {/if}
        </li>
        <li class="navbar-item">
            <a class="navbar-link" href="./">
                <img class="navbar-icon" src="icons/placeholder.svg" alt="SPARC 2028">
                SPARC 2028
            </a>
        </li>
        <li class="navbar-divider"></li>
        <li class="navbar-item">
            <a class="navbar-link" href="./about">
                <img class="navbar-icon" src="icons/placeholder.svg" alt="About us">
            </a>
        </li>
        <li class="navbar-item">
            <a class="navbar-link" href="./help">
                <img class="navbar-icon" src="icons/placeholder.svg" alt="Help">
            </a>
        </li>
        <li class="navbar-item">
            <a class="navbar-link" href="./report">
                <img class="navbar-icon" src="icons/placeholder.svg" alt="Report an error">
            </a>
        </li>
    </ul>
</nav>
