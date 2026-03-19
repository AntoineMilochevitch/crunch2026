<script lang="ts">
  import { challenges, completeChallenge } from '$lib/stores';
  import { Trophy, CheckCircle2, Circle, Coins } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
</script>

<div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
  <div class="flex items-center gap-3 mb-6">
    <div class="bg-green-100 p-2 rounded-xl">
      <Trophy class="w-6 h-6 text-green-600" />
    </div>
    <h3 class="text-gray-900 font-bold text-lg">Défis du Moment</h3>
  </div>

  <div class="space-y-4">
    {#each $challenges as challenge}
      <button 
        on:click={() => completeChallenge(challenge.id)}
        disabled={challenge.completed}
        class="w-full text-left relative overflow-hidden group p-4 rounded-2xl border transition-all duration-300 {challenge.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100 hover:border-green-200 hover:shadow-md active:scale-[0.98]'}"
      >
        <div class="flex gap-4 relative z-10">
          <div class="mt-1">
            {#if challenge.completed}
              <CheckCircle2 class="w-6 h-6 text-green-500" />
            {:else}
              <Circle class="w-6 h-6 text-gray-300 group-hover:text-green-400" />
            {/if}
          </div>
          <div class="flex-grow">
            <h4 class="font-bold {challenge.completed ? 'text-green-800' : 'text-gray-900'} leading-none mb-1">{challenge.title}</h4>
            <p class="text-xs {challenge.completed ? 'text-green-600/70' : 'text-gray-500'} mb-2">{challenge.description}</p>
            <div class="flex items-center gap-1 bg-amber-50 text-amber-700 w-fit px-2 py-0.5 rounded-lg text-[10px] font-black uppercase">
              <Coins class="w-3 h-3" /> {challenge.points} pts
            </div>
          </div>
        </div>

        {#if challenge.completed}
          <div in:fade class="absolute top-0 right-0 p-2">
            <span class="text-[10px] font-black text-green-600 uppercase tracking-widest bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">Complété</span>
          </div>
        {/if}
      </button>
    {/each}
  </div>
</div>
