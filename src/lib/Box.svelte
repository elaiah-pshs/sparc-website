<script>
    export let header;
    export let author;
    export let body;
</script>

<div class="box">

<h2>{header}</h2>
<h3><i>By {author}</i></h3>
<p>{body}</p>

<style>
    .box {
        background-color: #ac4c32;
        color: white;
        border-radius: 25px;
        border: 2px solid white; padding: 20px;
    }
</style>

</div>