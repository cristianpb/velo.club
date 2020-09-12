<svelte:head>
  <title>Velo Club</title>
</svelte:head>

<div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
>
  <div class="container px-6 mx-auto">
    <h2 class="mb-2 text-4xl font-bold text-white">
      La location de vélos à assistance électrique
    </h2>
    <h3 class="mb-8 text-2xl text-gray-200">
      des 50€ par mois
    </h3>
    <a href='offres' class="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg">
      Rejoindre le club
    </a>
  </div>
</div>

<section class="container p-10 px-6 mx-auto">
  <h2 class="mb-8 text-4xl font-bold text-center text-gray-800">
   Avantages! 
  </h2>
  <div class="flex flex-wrap items-center mb-20">
    <div class="w-full md:w-1/2">
      <h4 class="mb-3 text-3xl font-bold text-gray-800">En cas de crevasse, nous remplaçons votre vélo en 48h</h4>
      <p class="mb-8 text-gray-600">Adieu la paperasse, les assurances en plus, les SAV interminables...
        Nos équipes vous répondent en moins de 20 minutes.</p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/bycicle.svg" alt="Monitoring" />
    </div>
  </div>

  <div class="flex flex-wrap items-center mb-20">
    <div class="w-full md:w-1/2">
      <img src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/bike.svg" alt="Reporting" />
    </div>
    <div class="w-full pl-10 md:w-1/2">
      <h4 class="mb-3 text-3xl font-bold text-gray-800">Sans engagement</h4>
      <p class="mb-8 text-gray-600">Vous pouvez changer ou rendre votre vélo à tout moment, sans frais. </p>
    </div>
  </div>

  <div class="flex flex-wrap items-center mb-20">
    <div class="w-full md:w-1/2">
      <h4 class="mb-3 text-3xl font-bold text-gray-800">Remplacement en cas de vol</h4>
      <p class="mb-8 text-gray-600">En cas de vol, nous remplaçons votre appareil.</p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/bicycle.svg" alt="Syncing" />
    </div>
  </div>
</section>
