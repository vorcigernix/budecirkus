<script>
  import { onMount } from 'svelte';
  export let segment;
  
  const handleNavCollapse = () => {
    document.querySelector("nav").classList.toggle("collapsed");
  }

  const closeNav = () => {
    document.querySelector("nav").classList.add("collapsed");
  };

  onMount(closeNav)
</script>

<style>

nav > .hamburger {
  display: block;
  width: 3rem;
  height: 3rem;
  border: 0;
  background-image: url('/hamburger.png');
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
}

nav > .hamburger:focus {
  outline: none;
}

nav.collapsed > ul {
  height: 0;
}

nav > ul {
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  height: 12.25rem;
  background-color: var(--white);
  transition: height .12s linear;
}

nav > ul > li {
  margin: 0;
  padding: 0;
}

nav > ul > li > a {
  display: block;
  padding: 0.75rem;
  color: var(--orange);
  border-bottom: 1px solid var(--blue);
  text-decoration: none;
}

@media(min-width: 768px) {

}

</style>

<nav class="collapsed">
  <button class="hamburger" on:click={handleNavCollapse} aria-label="Nabídka"></button>
  <ul>
    <li>
      <a class:selected={segment === undefined} href="." on:click={closeNav}>Bude Cirkus</a>
    </li>
    <li>
      <a class:selected={segment === 'kurzy'} href="kurzy" on:click={closeNav}>Kurzy</a>
    </li>
    <li>
      <a class:selected={segment === 'vystoupeni'} href="vystoupeni" on:click={closeNav}>Vystoupení</a>
    </li>
    <li>
      <a class:selected={segment === 'workshopy'} href="workshopy" on:click={closeNav}>Workshopy</a>
    </li>
	  <li>
      <a class:selected='{segment === "kontakty"}' href='kontakty' on:click={closeNav}>Kontakty</a>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
		-->
  </ul>
</nav>
