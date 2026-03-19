<script lang="ts">
  import { globalEcoScore, co2Equivalent, totalDataRate } from '$lib/stores';
  import { Info, Wifi } from 'lucide-svelte';

  const scoreColors = {
    'A': 'bg-green-500',
    'B': 'bg-lime-500',
    'C': 'bg-yellow-400',
    'D': 'bg-orange-400',
    'E': 'bg-red-500'
  };
</script>

<div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
  <div class="flex justify-between items-start mb-6">
    <div>
      <h3 class="text-gray-500 text-sm font-medium uppercase tracking-wider">Usage Réseau</h3>
      <p class="text-xs text-gray-400 mt-0.5">Flux de données en direct</p>
    </div>
    <div class="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-600 transition-colors cursor-help">
      <Info class="w-5 h-5" />
    </div>
  </div>

  <div class="flex-grow flex flex-col items-center justify-center py-4">
    <div class="relative w-32 h-32 flex items-center justify-center mb-6">
      <svg class="w-full h-full transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="58"
          stroke="currentColor"
          stroke-width="12"
          fill="transparent"
          class="text-gray-100"
        />
        <circle
          cx="64"
          cy="64"
          r="58"
          stroke="currentColor"
          stroke-width="12"
          fill="transparent"
          stroke-dasharray="364.4"
          stroke-dashoffset={364.4 * (1 - ($totalDataRate / 100))}
          class="text-green-500 transition-all duration-1000 ease-out"
          stroke-linecap="round"
        />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-5xl font-black {scoreColors[$globalEcoScore]} text-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg transform rotate-3">
          {$globalEcoScore}
        </span>
      </div>
    </div>

    <div class="text-center">
      <div class="flex items-center justify-center gap-2 mb-1">
        <Wifi class="w-5 h-5 text-blue-500" />
        <span class="text-3xl font-bold text-gray-900">{$totalDataRate} <span class="text-lg font-medium text-gray-500">Mbps</span></span>
      </div>
      <p class="text-sm font-medium text-gray-500">
        Impact : <span class="text-green-600 font-bold">{$co2Equivalent}g</span> CO<sub>2</sub>/h
      </p>
    </div>
  </div>

  <div class="mt-8 pt-6 border-t border-gray-50">
    <div class="flex justify-between items-center text-sm mb-2">
      <span class="text-gray-500">Efficacité Réseau</span>
      <span class="font-bold text-gray-900">Optimal</span>
    </div>
    <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
      <div class="bg-blue-500 h-2 rounded-full w-[92%]"></div>
    </div>
  </div>
</div>
