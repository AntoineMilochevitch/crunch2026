<script lang="ts">
  import EcoScoreCard from '$lib/components/EcoScoreCard.svelte';
  import DevicesCard from '$lib/components/DevicesCard.svelte';
  import HistoryChart from '$lib/components/HistoryChart.svelte';
  import SuggestionsCard from '$lib/components/SuggestionsCard.svelte';
  import ChallengesCard from '$lib/components/ChallengesCard.svelte';
  import RewardsCard from '$lib/components/RewardsCard.svelte';
  import { totalDataRate, globalEcoScore, co2Equivalent, selectedDeviceId, devices } from '$lib/stores';
  import { LayoutDashboard, Trophy, Leaf } from 'lucide-svelte';

  let activeTab = $state('dashboard'); // 'dashboard' or 'eco-actions'

  // Helper to get selected device name if any
  let selectedName = $derived.by(() => {
    if (!$selectedDeviceId) return null;
    return $devices.find(d => d.id === $selectedDeviceId)?.name;
  });
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- Welcome Header -->
  <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div>
      <h2 class="text-3xl font-black text-gray-900 tracking-tight">Bonjour, Antoine Milo ! 👋</h2>
      <p class="text-gray-500 font-medium max-w-lg mt-2">
        {#if selectedName}
          Focus sur <span class="text-blue-600 font-bold">{selectedName}</span> : { $co2Equivalent }g CO<sub>2</sub>/h.
        {:else}
          Votre empreinte numérique globale est de <span class="text-green-600 font-bold">{$co2Equivalent}g CO<sub>2</sub>/h</span>.
        {/if}
      </p>
    </div>
    
    <!-- Tab Navigation -->
    <div class="flex p-1 bg-gray-100 rounded-2xl w-fit">
      <button 
        on:click={() => activeTab = 'dashboard'}
        class="flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all {activeTab === 'dashboard' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}"
      >
        <LayoutDashboard class="w-4 h-4" /> Tableau de Bord
      </button>
      <button 
        on:click={() => activeTab = 'eco-actions'}
        class="flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all {activeTab === 'eco-actions' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}"
      >
        <Leaf class="w-4 h-4" /> Éco-Actions
      </button>
    </div>
  </div>

  {#if activeTab === 'dashboard'}
    <!-- Dashboard Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div class="lg:col-span-1 lg:row-span-1">
        <EcoScoreCard />
      </div>

      <div class="lg:col-span-1 lg:row-span-2">
        <DevicesCard />
      </div>

      <div class="lg:col-span-1 lg:row-span-1">
        <HistoryChart />
      </div>

      <div class="lg:col-span-1 lg:row-span-1">
        <SuggestionsCard />
      </div>
    </div>
  {:else}
    <!-- Eco-Actions (Challenges & Rewards Store) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <div class="lg:col-span-1">
        <ChallengesCard />
      </div>
      <div class="lg:col-span-2">
        <RewardsCard />
      </div>
    </div>
  {/if}
</div>

<style>
  :global(.custom-scrollbar::-webkit-scrollbar) {
    width: 6px;
  }
  :global(.custom-scrollbar::-webkit-scrollbar-track) {
    background: transparent;
  }
  :global(.custom-scrollbar::-webkit-scrollbar-thumb) {
    background: #e5e7eb;
    border-radius: 10px;
  }
</style>
