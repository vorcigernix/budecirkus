<script>
    const goTo = (route) => {
        window.location.href = route;
    }
</script>

<style>
    h1 {
        font-weight: 500;
        font-size: 2.5rem;
        color: var(--orange);
    }

    .card {
        width: 95%;
        height: auto;
        padding: 2rem;
        margin-bottom: 1rem;
        background-color: var(--white);
        border-radius: .5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
        text-align: left;
    }

    .image {
        width: 100%;
    }

    .figure {
        margin: 0;
        padding-top: 2rem;
    }

    .contact {
        padding: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }

</style>

<svelte:head>
    <title>Nabízíme</title>
</svelte:head>

<section class="card">
    <h1 aria-label="Nadpis">Workshopy</h1>
    <p class='description' aria-label="Popis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod justo suscipit scelerisque fermentum.
        Etiam vitae facilisis tellus, nec dictum metus. Etiam viverra enim venenatis, mollis mauris in, maximus magna.
        Sed nunc enim, consectetur dignissim porta at, dapibus in turpis. Suspendisse ultricies pretium metus lobortis eleifend.
        Aliquam in finibus dui, non malesuada odio. Maecenas ut leo tristique, posuere est a, scelerisque tortor. Nam volutpat
        faucibus scelerisque.
    </p>
    <figure class='figure' aria-label="Obrázek k workshopu">
        <img class='image' src="photo2.jpg" alt="dítě v akrobatické šále s dozorem">
    </figure>
</section>

<section class="card">
    <h1 aria-label="Nadpis">Akrobatická vystoupení</h1>
    <p class='description' aria-label="Popis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod justo suscipit scelerisque fermentum.
        Etiam vitae facilisis tellus, nec dictum metus. Etiam viverra enim venenatis, mollis mauris in, maximus magna.
        Sed nunc enim, consectetur dignissim porta at, dapibus in turpis. Suspendisse ultricies pretium metus lobortis eleifend.
        Aliquam in finibus dui, non malesuada odio. Maecenas ut leo tristique, posuere est a, scelerisque tortor. Nam volutpat
        faucibus scelerisque.
    </p>
    <figure class='figure' aria-label="Obrázek k akrobatickému vystoupení">
        <img  class='image' src="photo1.jpg" alt="mladá slečna zavěšená v cirkusovém kruhu před publikem">
    </figure>
</section>

<section class='card contact'>
    <h1 aria-label="Odkaz na kontakty" on:click={() => goTo('/kontakty')}>
        Kontaktujte nás
    </h1>
</section>
