<script lang="ts">
  import { suggestions } from '$lib/data';
  import { Lightbulb, ArrowRight } from 'lucide-svelte';

  const impactColors = {
    'High': 'text-red-600 bg-red-50',
    'Medium': 'text-orange-600 bg-orange-50',
    'Low': 'text-blue-600 bg-blue-50'
  };
</script>

<div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
  <div class="flex items-center gap-3 mb-6">
    <div class="bg-amber-100 p-2 rounded-xl">
      <Lightbulb class="w-6 h-6 text-amber-600" />
    </div>
    <h3 class="text-gray-900 font-bold text-lg">Conseils Eco-Numériques</h3>
  </div>

  <div class="space-y-4">
    {#each suggestions as suggestion}
      <div class="group cursor-pointer p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300">
        <div class="flex justify-between items-start mb-2">
          <h4 class="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{suggestion.title}</h4>
          <span class="text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider {impactColors[suggestion.impact]}">
            Impact {suggestion.impact}
          </span>
        </div>
        <p class="text-xs text-gray-500 mb-3 leading-relaxed">{suggestion.description}</p>
        <button class="text-xs font-bold text-green-600 flex items-center gap-1 group-hover:gap-2 transition-all">
          En savoir plus <ArrowRight class="w-3 h-3" />
        </button>
      </div>
    {/each}
  </div>
</div>
