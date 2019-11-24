<style>
:global(body) {
    background-color: var(--lightgrey);
}


h2 {
    font-size: 1rem;
    color: var(--black);
    margin: 4rem 0;
}

.landing {
    text-align: center;
    position: relative;
}

.landing::before {
    content: '';
    display: block;
    position: absolute;
    top: -4rem;
    left: 0;
    right: 0;
    height: 16rem;
    background-image: url('/landing-top.png');
    background-position: center top;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.2;
}

.landing::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 16rem;
    background-image: url('/landing-bot.png');
    background-position: center bottom;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.2;
}


</style>

<svelte:head>
	<title>Bude Cirkus</title>
</svelte:head>

<section class="landing">
    <h1>Obohaťte se <strong>novým cirkusem</strong></h1>
    <h2>Výjimečný. Jedinečný. Dechberoucí.</h2>
    <div class="box">
        <p>Pořádáme kurzy pro děti od 3 do 15 let a workshopy pro malé i velké.</p>
        <a href="kurzy">Přihlaste se do kurzu</a>
    </div>
    <div class="box">
        <p>Nabízíme netradiční vystoupení na plesech, firemních akcích i festivalech</p>
        <a href="vystoupeni">Objednejte si nás</a>
    </div>
</section>