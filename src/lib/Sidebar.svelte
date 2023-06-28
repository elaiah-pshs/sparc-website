<script>
    import NavLink from "$lib/NavLink.svelte";
    import '../styles/Sidebar.scss';
</script>

<aside class="sidebar toggled">
    <div class="sidebar-header">
        <NavLink location="sidebar-header" href="./" src="icons/placeholder.svg" alt="SPARC 2028" text />
    </div>

    <ul class="sidebar-links">
        <li class="sidebar-item">
            <NavLink location="sidebar" href="./announcements" src="icons/placeholder.svg" alt="Announcements" text />
        </li>
        <li class="sidebar-item">
            <NavLink location="sidebar" href="./progress" src="icons/placeholder.svg" alt="Progress Tracker" text />
        </li>
        <li class="sidebar-item">
            <NavLink location="sidebar" href="./materials" src="icons/placeholder.svg" alt="All Materials" text />
        </li>        
    </ul>

    <ul class="sidebar-dropdowns">
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        <li class="sidebar-item">placeholder</li>
        
        <!-- <li class="sidebar-dropdown">Readings</li>
        <li class="sidebar-dropdown">Practice Tests</li>
        <li class="sidebar-dropdown">Other Materials</li> -->
    </ul>
</aside>
