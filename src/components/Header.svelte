<script>
    import Nav from '../components/Nav.svelte';
    import { onMount } from 'svelte';
    export let segment;
    
    let handleHeaderBG = () => {
        document.querySelector("header").classList.toggle("top", window.pageYOffset==0);
    };

    onMount(handleHeaderBG);

</script>

<svelte:window on:scroll={handleHeaderBG}/>

<style>

@supports(display: flex) {

    :global(body) {
        margin-top: 4rem;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 4rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0.75rem;

        background-color: var(--white);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
        z-index: 100;

        transition: all 0.12s linear;
    }

    .top {
        background-color: transparent;
        box-shadow: none;
    }

    header > a {
        display: block;
        height: 100%;

    }

    header > a > img {
        max-height: 100%;
    }

}
</style>

<header>
    <div class="classLoader top"></div>
    <a href="." title="Hlavní stránka">
        <img alt="Logo Bude Cirkus" src="/logo_dlouhe.png" />
    </a>
    <Nav {segment} />
</header>
