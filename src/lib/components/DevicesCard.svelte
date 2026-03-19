<script lang="ts">
  import { devices, selectedDeviceId } from '$lib/stores';
  import { Tv, Monitor, Smartphone, Gamepad2, Router, Cpu, Signal, SignalLow, Wifi, LayoutGrid } from 'lucide-svelte';

  const icons = {
    'TV': Tv,
    'Computer': Monitor,
    'Smartphone': Smartphone,
    'Console': Gamepad2,
    'Router': Router,
    'IoT': Cpu
  };

  const scoreColors = {
    'A': 'bg-green-100 text-green-700',
    'B': 'bg-lime-100 text-lime-700',
    'C': 'bg-yellow-100 text-yellow-700',
    'D': 'bg-orange-100 text-orange-700',
    'E': 'bg-red-100 text-red-700'
  };

  function selectDevice(id: string | null) {
    selectedDeviceId.set(id);
  }
</script>

<div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
  <div class="flex justify-between items-center mb-6">
    <div>
      <h3 class="text-gray-900 font-bold text-lg">Appareils</h3>
      <p class="text-xs text-gray-500 font-medium">Sélectionnez pour filtrer l'impact</p>
    </div>
    
    <button 
      on:click={() => selectDevice(null)}
      class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all {$selectedDeviceId === null ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-50 text-gray-400 hover:text-gray-600'}"
    >
      <LayoutGrid class="w-4 h-4" /> Global
    </button>
  </div>

  <div class="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-grow">
    {#each $devices as device}
      <button 
        on:click={() => selectDevice(device.id)}
        class="w-full text-left flex items-center justify-between p-3 rounded-2xl transition-all border {$selectedDeviceId === device.id ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-gray-50 border-transparent hover:border-gray-200 group'}"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center {device.status === 'online' ? 'bg-white shadow-sm text-blue-600' : 'bg-gray-200 text-gray-400'}">
            <svelte:component this={icons[device.type]} class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-gray-900 leading-none mb-1">{device.name}</h4>
            <div class="flex items-center gap-2">
              <span class="text-[10px] px-1.5 py-0.5 rounded-md font-black {scoreColors[device.ecoScore]}">
                {device.ecoScore}
              </span>
              <span class="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                {#if device.status === 'online'}
                  <Signal class="w-3 h-3 text-green-500" /> Actif
                {:else}
                  <SignalLow class="w-3 h-3 text-gray-400" /> Inactif
                {/if}
              </span>
            </div>
          </div>
        </div>
        
        <div class="text-right">
          <p class="text-sm font-black text-gray-900">{device.status === 'online' ? device.dataRate : 0} <span class="text-[10px] font-medium text-gray-400">Mbps</span></p>
          <p class="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Flux</p>
        </div>
      </button>
    {/each}
  </div>
</div>
