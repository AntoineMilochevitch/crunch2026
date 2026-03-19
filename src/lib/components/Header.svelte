<script lang="ts">
  import { userPoints } from '$lib/stores';
  import { User, Coins } from 'lucide-svelte';
  import { base } from '$app/paths';
</script>

<header class="bg-white border-b border-gray-100 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 overflow-hidden rounded-md">
          <img src="{base}/Orange_logo.svg.png" alt="Orange Logo" class="w-full h-full object-contain" />
        </div>
        <div>
          <h1 class="text-xl font-bold text-gray-900 leading-none tracking-tight">Eco Digital</h1>
          <p class="text-[10px] text-orange-600 font-black tracking-[0.2em] uppercase">Connecté</p>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <div class="hidden sm:flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
          <Coins class="w-4 h-4 text-amber-600" />
          <span class="text-sm font-bold text-amber-900">{$userPoints} pts</span>
        </div>
        
        <div class="flex items-center gap-3 pl-6 border-l border-gray-100">
          <div class="text-right hidden sm:block">
            <p class="text-sm font-semibold text-gray-900">Antoine Milo</p>
            <p class="text-xs text-gray-500 font-medium">Eco-Citoyen</p>
          </div>
          <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 border-2 border-white shadow-sm overflow-hidden">
             <User class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
