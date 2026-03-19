<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import './layout.css';
  let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 antialiased selection:bg-green-100 selection:text-green-900">
  <Header />
  
  <main class="flex-grow">
    {@render children()}
  </main>

  <footer class="bg-white border-t border-gray-100 py-10 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <div class="flex items-center justify-center gap-2 mb-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
        <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-xs">E</div>
        <span class="font-bold text-gray-900">Eco Digital Dashboard</span>
      </div>
      <p class="text-xs text-gray-400 font-medium">© 2026 Projet Démo - Inspiré par les solutions Orange Livebox. Aucune donnée réelle n'est collectée.</p>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    @apply overflow-x-hidden;
  }
</style>
