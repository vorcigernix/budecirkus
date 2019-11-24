<script context="module">
  export async function preload() {
	const res = await this.fetch(`../_markdown/kontakty.md`);
    return res.ok ? { mdtext: await res.text() } : this.error(404, "Not found");
  }
</script>

<script>
	export let mdtext;
	
</script>

<svelte:head>
  <title>Kontakty</title>
</svelte:head>

<h1>Kontakty</h1>
<p>{@html mdtext}</p>
