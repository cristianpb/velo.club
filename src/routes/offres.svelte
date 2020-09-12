<svelte:head>
  <title>Nos offres - Velo Club</title>
</svelte:head>

<div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
>
  <div class="container px-6 mx-auto">
    <h2 class="mb-2 text-4xl font-bold text-white">
      Choisir son meilleur offre
    </h2>
  </div>
</div>

<section class="container p-10 px-6 mx-auto">

<div class="flex flex-wrap">
  <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3">

    <div class="md:flex-shink-0">
      <img class="rounded-lg md:w-56" src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/friday28.jpg" alt="Monitoring" />
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <div class="text-sm font-bold tracking-wide text-indigo-600 uppercase">
        Friday 28
      </div>
      <a class="block mt-1 text-lg font-semibold leading-tight text-gray-900 hover:underline" href="{null}">
        "Sportif, urbain et épuré", telle est la devise de notre Friday 28.1 !</a>
      <p class="mt-2 text-gray-600"> Friday 28 est débarrassé de tout excès, ne gardant que l'essentiel pour vos sorties toujours plus rapides et enivrantes !</p>
    </div>

  </div>
  <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3">

    <div class="md:flex-shink-0">
      <img class="rounded-lg md:w-56" src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/lundi26.jpg" alt="Monitoring" />
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <div class="text-sm font-bold tracking-wide text-indigo-600 uppercase">
        Lundi 26
      </div>
      <a class="block mt-1 text-lg font-semibold leading-tight text-gray-900 hover:underline" href="{null}">le lundi matin, et tous les autres jours de la semaine !!!
        </a>
        <p class="mt-2 text-gray-600">Nous sommes convaincus qu’il est possible de changer nos habitudes et de laisser la voiture au garage</p>
    </div>

  </div>
  <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3">

    <div class="md:flex-shink-0">
      <img class="rounded-lg md:w-56" src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/samedi27.jpg" alt="Monitoring" />
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <div class="text-sm font-bold tracking-wide text-indigo-600 uppercase">
        Samedi 27
      </div>
      <a class="block mt-1 text-lg font-semibold leading-tight text-gray-900 hover:underline" href="{null}">Un pour tout, tout pour faire !</a>
      <p class="mt-2 text-gray-600">Plus les saisons passent et plus la devise du Samedi 27 Xroad se vérifie.</p>
    </div>

  </div>
</div>


</section>
