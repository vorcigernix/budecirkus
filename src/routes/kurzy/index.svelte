<script context="module">
	import {getAllCourses} from "../../services/dataFetchers";

	export async function preload({ params, query }) {
		const courses = await getAllCourses()
		return {courses}
	}
</script>

<script>
	export let courses;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each courses as course}
		<li>{course.abbreviation}</li>
	{/each}
</ul>
