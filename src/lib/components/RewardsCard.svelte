<script lang="ts">
  import { rewards } from '$lib/data';
  import { userPoints, spendPoints } from '$lib/stores';
  import { ShoppingBag, Coins, Lock } from 'lucide-svelte';

  function buyReward(id: string, cost: number) {
    if (spendPoints(cost)) {
      alert('Félicitations ! Vous avez débloqué une récompense.');
    } else {
      alert('Points insuffisants ! Continuez à relever des défis.');
    }
  }
</script>

<div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
  <div class="flex items-center gap-3 mb-6">
    <div class="bg-amber-100 p-2 rounded-xl">
      <ShoppingBag class="w-6 h-6 text-amber-600" />
    </div>
    <h3 class="text-gray-900 font-bold text-lg">Boutique Eco</h3>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {#each rewards as reward}
      <div class="group relative overflow-hidden bg-gray-50 rounded-2xl p-4 border border-transparent hover:border-amber-200 transition-all">
        <div class="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{reward.image}</div>
        <h4 class="font-bold text-gray-900 text-sm mb-1">{reward.title}</h4>
        <p class="text-[10px] text-gray-500 mb-4 h-8 leading-tight">{reward.description}</p>
        
        <button 
          on:click={() => buyReward(reward.id, reward.cost)}
          class="w-full py-2 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all {$userPoints >= reward.cost ? 'bg-amber-100 text-amber-700 hover:bg-amber-500 hover:text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}"
        >
          {#if $userPoints < reward.cost}
            <Lock class="w-3 h-3" />
          {:else}
            <Coins class="w-3 h-3" />
          {/if}
          {reward.cost} pts
        </button>
      </div>
    {/each}
  </div>
</div>
