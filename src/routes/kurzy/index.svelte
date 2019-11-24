<script context="module">
    export async function preload() {
        const courses = await this.fetch(`kurzy.json`).then(r => r.json());
        const kidCourses = courses.filter(course => course.courseTypeName === 'pro děti')
        const grownupCourses = courses.filter(course => course.courseTypeName === 'pro dospělé')
        return {kidCourses, grownupCourses}
    }
</script>

<script>
    import Course from "../../components/Course.svelte";
    export let kidCourses, grownupCourses;
</script>

<style>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
</style>

<svelte:head>
    <title>Kurzy</title>
</svelte:head>

<section>

    <h1>Kurzy</h1>

    <h2>Pro děti</h2>
    <p>
        Za hodinku se děti společně zasmějí, zablbnou a samozřejmě se u toho naučí spoustu nových věcí.
        Základy žonglování, akrobacie, párové akrobacie, vzdušné akrobacie, balanc, stavění lidských pyramid, práce ve
        skupině, připravování vystoupení, rozvíjení fantazie, koordinace a pochopení vlastního těla. Tomu všemu se věnujeme a
        stihneme si k tomu zahrát spousty hříček a hlavně se zasmát.
    </p>
    <ul aria-label="Sekce - děti">
        {#each kidCourses as course}
            <Course course={course}/>
        {/each}
    </ul>


    <h2>Pro dospělé</h2>
    <p>
        Vyšplhat, zamotat se, zavěsit se, řízeně a elegantně popadnout a rozmotat se, společně vytvořit pozice, které
        jste předtím nechápali, lidská pyramida, lepší poznání vlastního těla a posunutí dosavadních možností. Vše
        samozřejmě trochu jinak než jste zvyklí.
    </p>
    <ul aria-label="Sekce - dospělí">
        {#each grownupCourses as course}
            <Course course={course}/>
        {/each}
    </ul>
    <h2 aria-label="Sekce - jak se přihlásit">Jak se přihlásit</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod justo suscipit scelerisque fermentum.
        Etiam vitae facilisis tellus, nec dictum metus. Etiam viverra enim venenatis, mollis mauris in, maximus magna.
        Sed nunc enim, consectetur dignissim porta at, dapibus in turpis. Suspendisse ultricies pretium metus lobortis eleifend.
        Aliquam in finibus dui, non malesuada odio. Maecenas ut leo tristique, posuere est a, scelerisque tortor. Nam volutpat faucibus scelerisque.
    </p>

</section>
