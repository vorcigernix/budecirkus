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
</style>

<svelte:head>
    <title>Kurzy</title>
</svelte:head>

<h1>Pro děti</h1>
<ul aria-label="Sekce - děti">
    {#each kidCourses as course}
        <Course course={course}/>
    {/each}
</ul>


<h1>Pro dospělé</h1>
<ul aria-label="Sekce - dospělí">
    {#each grownupCourses as course}
        <Course course={course}/>
    {/each}
</ul>
<h1 aria-label="Sekce - jak se přihlásit">Jak se přihlásit</h1>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod justo suscipit scelerisque fermentum.
    Etiam vitae facilisis tellus, nec dictum metus. Etiam viverra enim venenatis, mollis mauris in, maximus magna.
    Sed nunc enim, consectetur dignissim porta at, dapibus in turpis. Suspendisse ultricies pretium metus lobortis eleifend.
    Aliquam in finibus dui, non malesuada odio. Maecenas ut leo tristique, posuere est a, scelerisque tortor. Nam volutpat faucibus scelerisque.
</p>
