<script>
    export let course
</script>

<li>
    <ul>
        <li aria-label="Název kurzu">{course.abbreviation}</li>
        <li aria-label="Popis kurzu">{course.description}</li>
        <li aria-label="Vyučující">{course.teacher}</li>
        <li aria-label="Délka kurzu">{course.lessonLengthInMinutes}</li>
        <li aria-label="Naplnění kurzu">{course.filled}/{course.maxFreePlacesForLessonSelection + course.filled}</li>
        <li aria-label="Přihlásit se"><a href="https://budecirkus.webooker.eu/Courses/Register/{course.courseID}">Přihlaste se</a></li>
    </ul>
</li>
