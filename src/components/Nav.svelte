<script>
  export let segment;
</script>

<style>
</style>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">budecirkus</a>
    </li>
    <li>
      <a class:selected={segment === 'kurzy'} href="kurzy">Kurzy</a>
    </li>
    <li>
      <a class:selected={segment === 'nabizime'} href="nabizime">Nabízíme</a>
    </li>
	<li>
      <a class:selected='{segment === "kontakty"}' href='kontakty'>Kontakty</a>
    </li>
    <li>
      <a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a>
    </li>

  </ul>
</nav>
