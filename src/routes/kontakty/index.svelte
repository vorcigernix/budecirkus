<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`../${params.slug}.md`);
		return res.ok ? { post: await res.json() } : this.error(404, 'Not found');
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>Kontakty</title>
</svelte:head>

<h1>claim</h1>

<p>paragraph</p>