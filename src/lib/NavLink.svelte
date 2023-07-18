<script>
    // Legend for link types:

    // - First character indicates location
    // - For a toggle link, second character indicates whether the link is
    //   toggled by a click on an arrow-shaped toggler arrow or a click on the
    //   link itself
    // - For a normal link, characters after the first signify the presence of
    //   certain elements in the link

    // u - link is in the topbar
    // l - link is in the sidebar
    // p - link is in the path display in the topbar

    // a - toggle link expands with a click on an arrow icon
    // e - toggle link expands with a click on the element itself

    // i - link has icon
    // t - link has text

    export let type;
	export let href;
	export let src = "";
	export let alt = "";

    let location = {"u": "topbar", "l": "sidebar", "p": "path", "h": "sidebar-header"}[type[0]];

    function toggleOpenClick() {
		open = !open;
        console.log("clicked");
	}
</script>


<a class={location + "-link"} href={href}>
    <slot></slot>

    {#if type.indexOf('i') != -1}
        <img class={location + "-icon"} src={src} alt={alt}>
    {/if}

    {#if type.indexOf('t') != -1}
        <span class={location + "-text"}>{alt}</span>
    {/if}
</a>
