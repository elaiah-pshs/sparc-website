<script>
	import { expanded } from '$lib/data/stores.js';
    import NavLink from "$lib/NavLink.svelte";
    import '../styles/Topbar.scss';

    let is_expanded, expander;

    expanded.subscribe((value) => {
		is_expanded = value;
	});

    function toggleSidebar() {
        let sidebar = document.querySelector(".sidebar");

        if (!is_expanded) {
            expander.style.transition = "500ms";
            expander.src = "icons/expand_sidebar.svg";
            sidebar.classList.add("toggled");
        }   
    }

    function hideSidebar() {
        let sidebar = document.querySelector(".sidebar");

        if (!is_expanded)
            expander.src = "icons/sidebar.svg";

        sidebar.classList.remove("toggled");
    }

    function expandSidebarClick() {
        expanded.update((n) => !n);
    }

    function expandSidebarKey(e) {
        if (e.key == "Enter")
            expanded.update((n) => !n);
    }
</script>

<ul class={"topbar" + (is_expanded ? " expanded" : "")}>
    <li
        class="topbar-item"

        on:mouseover={toggleSidebar}
        on:focus={toggleSidebar}
        on:mouseout={hideSidebar}
        on:blur={hideSidebar}

        on:click={expandSidebarClick}
        on:keydown={expandSidebarKey}
    >
        <img
            class={"topbar-link topbar-icon" + (is_expanded ? " expanded" : "")}
            src="icons/sidebar.svg"
            alt="Open sidebar"
            bind:this={expander}
        />
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
