
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
</style>

<svelte:head>
    <title>Kontakty</title>
</svelte:head>


<section class="card">
    <h1 aria-label="Nadpis">Kontakty</h1>
    <p class='description' aria-label="Popis">
       Máte-li jakékoliv dotazy ke kurzům nebo vystoupením, neváhejte mi napsat na <a href="mailto: ptejse@budecirkus.com">email</a> nebo na <a href="https://www.facebook.com/budecirkus">facebook</a>
    </p>
    <p aria-label="Telefon"> 777 225 865</p>
    <figure class='figure' aria-label="Obrázek ke kontaktu">
        <img class='image' src="photo2.jpg" alt="dítě v akrobatické šále s dozorem">
    </figure>
</section>