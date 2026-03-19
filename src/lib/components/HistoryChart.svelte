<script lang="ts">
  import { Bar } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  let activeFilter = $state('Semaine');
  const filters = ['Semaine', 'Mois', 'Année'];

  // Mock data generator for different views
  const getChartData = (filter: string) => {
    if (filter === 'Mois') {
      return {
        labels: ['S1', 'S2', 'S3', 'S4'],
        data: [1200, 1500, 1100, 1350]
      };
    } else if (filter === 'Année') {
      return {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
        data: [4500, 4200, 4800, 3900, 5100, 3200, 2800, 3500, 4100, 4600, 4900, 5500]
      };
    }
    // Default Week
    return {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      data: [320, 280, 410, 250, 520, 680, 450]
    };
  };

  // Svelte 5 derived state for data
  let currentData = $derived(getChartData(activeFilter));

  let data = $derived({
    labels: currentData.labels,
    datasets: [
      {
        label: 'CO2 (g)',
        data: currentData.data,
        backgroundColor: '#3b82f6',
        borderRadius: 8,
        hoverBackgroundColor: '#2563eb',
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
</script>

<div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
    <div>
      <h3 class="text-gray-900 font-bold text-lg">Empreinte Carbone</h3>
      <p class="text-xs text-gray-500 font-medium">Historique des flux réseau</p>
    </div>
    
    <div class="flex p-1 bg-gray-50 rounded-xl">
      {#each filters as filter}
        <button
          class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all {activeFilter === filter ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}"
          on:click={() => activeFilter = filter}
        >
          {filter}
        </button>
      {/each}
    </div>
  </div>

  <div class="flex-grow min-h-[150px]">
    <Bar {data} {options} />
  </div>
</div>
