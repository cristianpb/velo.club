<style lang="postcss">
</style>

<script>
  import { slide } from 'svelte/transition';

  let show = false;
</script>

<svelte:head>
  <title>Sapper with PostCSS and Tailwind</title>
</svelte:head>

<div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
>
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold mb-2 text-white">
      La location de vélos à assistance électrique
    </h2>
    <h3 class="text-2xl mb-8 text-gray-200">
      des 50€ par mois
    </h3>
    <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
      Rejoindre le club
    </button>
  </div>
</div>

<section class="container mx-auto px-6 p-10">
  <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
   Avantages! 
  </h2>
  <div class="flex items-center flex-wrap mb-20">
    <div class="w-full md:w-1/2">
      <h4 class="text-3xl text-gray-800 font-bold mb-3">En cas de crevasse, nous remplaçons votre vélo en 48h</h4>
      <p class="text-gray-600 mb-8">Adieu la paperasse, les assurances en plus, les SAV interminables...
        Nos équipes vous répondent en moins de 20 minutes.</p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/bycicle.svg" alt="Monitoring" />
    </div>
  </div>

  <div class="flex items-center flex-wrap mb-20">
    <div class="w-full md:w-1/2">
      <img src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/bike.svg" alt="Reporting" />
    </div>
    <div class="w-full md:w-1/2 pl-10">
      <h4 class="text-3xl text-gray-800 font-bold mb-3">Sans engagement</h4>
      <p class="text-gray-600 mb-8">Vous pouvez changer ou rendre votre vélo à tout moment, sans frais. </p>
    </div>
  </div>

  <div class="flex items-center flex-wrap mb-20">
    <div class="w-full md:w-1/2">
      <h4 class="text-3xl text-gray-800 font-bold mb-3">Remplacement en cas de vol</h4>
      <p class="text-gray-600 mb-8">En cas de vol, nous remplaçons votre appareil.</p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="{process.env.NODE_ENV === 'development' ? '' : '/velo.club'}/bicycle.svg" alt="Syncing" />
    </div>
  </div>
</section>
