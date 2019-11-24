<script>
    export let course
    console.log(course);
</script>

<style>
    ul {
        list-style: none;
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-areas:    "name name"
                                "desc desc"
                                "time capacity"
                                "signup signup";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr 1fr auto;
    }
    ul.box {
        padding: 1rem;
    }
    .name {
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--orange);
        grid-area: name;
    }
    .desc {
        grid-area: desc;
    }
    .time {
        grid-area: time;
    }
    .capacity {
        grid-area: capacity;
    }
    .signup {
        grid-area: signup;
    }
    .coloredText {
        color: var(--red);
    }
</style>

<li>
    <ul class="box">
        <li aria-label="Název kurzu" class="name coloredText">
            {course.abbreviation}
        </li>
        <li aria-label="Popis" class="desc">
            {course.name} vyučuje {course.teacher}<br>
        </li>
        <li aria-label="Délka kurzu" class="time">
            <i class="fas fa-stopwatch"></i>
            {course.lessonLengthInMinutes} min
        </li>
        <li aria-label="Naplnění kurzu" class="capacity">
            <i class="fas fa-users"></i>
            {course.filled}/{course.maxFreePlacesForLessonSelection + course.filled}
        </li>
        <li aria-label="Přihlásit se" class="signup">
            <a class='coloredText' href="https://budecirkus.webooker.eu/Courses/Register/{course.courseID}">Přihlaste se</a>
        </li>
    </ul>
</li>
