<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import '../styles/Navbar.scss';

    let path_html = '';

    onMount(() => {
        let path = $page.url.pathname;
        path = "/reviewers/q1/math/coodinates";
        let current_path = "";
        const links = [`<a class="navbar-path-link" href="./">home</a>`];
        path.split('/').filter((str) => str !== '').forEach(element => {
            current_path += ('/' + element);
            links.push(`<a class="navbar-path-link" href=".${current_path}">${element}</a>`);
        });
        path_html = links.join(`<span class="navbar-path-divider">/</span>`);
    });
        

    function toggleSidebar() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.add("toggled");
    }

    function hideSidebar() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.remove("toggled");
    }
</script>

<nav class="navbar">
    <ul class="navbar-items">
        <li on:mouseover={toggleSidebar} on:focus={toggleSidebar} on:mouseout={hideSidebar} on:blur={hideSidebar} class="navbar-item">
            <img class="navbar-icon sidebar-toggle" src="icons/sidebar.svg" alt="Open sidebar">
        </li>
        <li class="navbar-item">
            <p class="navbar-path">{@html path_html}</p>
        </li>
        <li class="navbar-item">
            <a class="navbar-link" href="./">
                <img class="navbar-icon" src="icons/placeholder.svg" alt="SPARC 2028">
                SPARC 2028
            </a>
        </li>
        <li class="navbar-item">
            <div class="navbar-divider"></div>
        </li>
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
