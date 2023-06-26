<script>
    import '../styles/Navbar.scss';

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
            <img class="navbar-link navbar-icon" src="icons/sidebar.svg" alt="Open sidebar">
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
