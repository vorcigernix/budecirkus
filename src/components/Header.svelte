<script>
    import Nav from '../components/Nav.svelte';
    export let segment;
</script>

<style>
</style>

<div>
    <a href="." >
        <img alt="Logo" src="/assets/logo.png" />
    </a>
    <div>
        <Nav {segment} />
    </div>
</div>
