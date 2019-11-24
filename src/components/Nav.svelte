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
      <a class:selected={segment === 'kurzy'} href="kurzy">kurzy</a>
    </li>
    <li>
      <a class:selected={segment === 'vystoupeni'} href="vystoupeni">vystoupeni</a>
    </li>
    <li>
      <a class:selected={segment === 'workshopy'} href="workshopy">workshopy</a>
    </li>
	<li><a class:selected='{segment === "kontakty"}' href='kontakty'>kontakty</a></li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
		-->
  </ul>
</nav>
