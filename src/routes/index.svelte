<script>
    const goTo = (route) => {
        window.location.href = route;
    }
</script>
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


.storyP {
    padding: 1rem;
    text-align: justify;
}

.photo {
    width: 100%;
}

.name {
    font-size: 1.5rem;
    color: var(--blue);
    text-align: center;
}

</style>

<svelte:head>
	<title>Bude Cirkus</title>
</svelte:head>

<section class="landing" aria-label="Hlavní stránka, první část">
    <h1 aria-label="Heslo Bude Cirkus">Obohaťte se <strong>novým cirkusem</strong></h1>
    <h2 aria-label="Podnadpis s popiskama">Výjimečný. Jedinečný. Dechberoucí.</h2>
    <div class="box" on:click={() => goTo('/kurzy')} aria-label="Kurzy">
        <p>Pořádáme kurzy pro děti od 3 do 15 let a workshopy pro malé i velké.</p>
        <a href="kurzy">Přihlaste se do kurzu</a>
    </div>
    <div class="box" on:click={() => goTo('/nabizime')} aria-label="Nabídka">
        <p>Nabízíme netradiční vystoupení na plesech, firemních akcích i festivalech</p>
        <a href="vystoupeni" aria-label="Odkaz na nabídku">Objednejte si nás</a>
    </div>
</section>

<section class="landing" aria-label="Náš příběh">
    <h1 aria-label="Nadpis příběhu">Můj příběh</h1>
    <h2 aria-label="Úvod příběhu">Toto je můj příběh o tom, jak se koníček stal prací.</h2>
    <div class="box">
        <p class="storyP" aria-label="První odstavec příběhu">
            Když jsem byla malá, začala jsem dělat atletiku. Po ukončení střední školy jsem nastoupila na studium
            v Praze, kde jsem studovala chemii životního prostředí a zároveň jsem se věnovala atletice. Dostala jsem
            příležitost vyjet na Erasmus do Granady (Španělsko) na dva semestry. Už jsem odjížděla s myšlenkou najít a
            zapojit se do nového cirkusu, kdyby tam byl.
        </p>
        <p class="storyP" aria-label="Druhý odstavec příběhu">
            Odjela jsem na Erasmus a začala jsem chodit na cirkus. Je to zábavné, nesoutěžní a pro všechny. Líbila se
            mi přátelská atmosféra na kurzech a když jsem se vrátila do Čech, věděla jsem, že se tomu chci věnovat.
        </p>
        <p class="storyP" aria-label="Třetí odstavec příběhu">
            Začala jsem učit děti na kurzu a paralelně k tomu trénovala atletiku a chodila na vysokou školu. Po studiu
            jsem se domluvila s přítelem, že se přestěhuji za ním do Českých Budějovic.
        </p>
        <p class="storyP" aria-label="Čtvrtý odstavec příběhu">
            Nebyl tam žádný cirkus, tak jsem sama otevřela jeden kurz, na začátku spíše pro kamarády, a také jsem začala
            vystupovat. Dneska máme 9 kurzů pro dětí a 2 pro dospěle. Můj koníček se stal mojí prací. Do budoucna chceme
            připravovat více workshopů, kulturních akcí a festivalů.
        </p>
    </div>
</section>

<section class="landing" aria-label="Lektoři">
    <h1 aria-label="Nadpis sekce">Naši lektoři</h1>
    <div class="box">
        <p class="name" aria-label="Jméno lektorky">Katka Vaněčková</p>
        <figure class='figure' >
            <img class='photo' src="lektor1.png" alt="Lektorka Katka Vaněčková">
        </figure>
    </div>
    <div class="box">
        <p class="name" aria-label="Jméno lektorky">Katka Vaněčková</p>
        <figure class='figure' >
            <img class='photo' src="lektor2.png" alt="Lektorka Katka Vaněčková">
        </figure>
    </div>
    <div class="box">
        <p class="name" aria-label="Jméno lektorky">Katka Vaněčková</p>
        <figure class='figure' >
            <img class='photo' src="lektor3.png" alt="Lektorka Katka Vaněčková">
        </figure>
    </div>
    <div class="box">
        <p class="name" aria-label="Jméno lektorky">Katka Vaněčková</p>
        <figure class='figure' >
            <img class='photo' src="lektor4.png" alt="Lektorka Katka Vaněčková">
        </figure>
    </div>
</section>
