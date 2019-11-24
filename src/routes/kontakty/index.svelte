<script context="module">
  export async function preload() {
	const res = await this.fetch(`../kontakty.md`);
	const rtext = await res.text();
	console.log(rtext);
    return res.ok ? { text: await rtext } : this.error(404, "Not found");
  }
</script>

<script>
	export let text;
</script>

<svelte:head>
  <title>Kontakty</title>
</svelte:head>

<h1>Kontakty</h1>

{@html text}