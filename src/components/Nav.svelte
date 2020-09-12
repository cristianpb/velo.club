<nav class="flex flex-wrap items-center justify-between p-6" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)" >
  <a href="." class="flex items-center flex-shrink-0 mr-6 text-white">
    <svg class="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="text-xl font-semibold tracking-tight">Velo.club</span>
  </a>
  <div class="block lg:hidden">
    <button on:click={() => burgerState = !burgerState} class="flex items-center px-3 py-2 border border-teal-400 rounded text-white-200 hover:text-teal hover:border-white">
      <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="flex-grow block w-full lg:flex lg:items-center lg:w-auto"
       class:hidden={burgerState}
       >
    <div class="text-sm lg:flex-grow">
      <button class="block mt-4 text-white lg:inline-block lg:mt-0 hover:text-teal">
        Blog
      </button>
    </div>
    <div>
      <a href="offres" class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-teal hover:text-teal-500 hover:bg-white lg:mt-0">
        Nos velos
      </a>
      <button class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-teal hover:text-teal-500 hover:bg-white lg:mt-0">
        Vos questions
      </button>
      <button class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-teal hover:text-teal-500 hover:bg-white lg:mt-0">
        Access membre
      </button>
    </div>
  </div>
</nav>

<script>
  let burgerState = true
  
</script>

<style>
  .hidden {}
</style>
