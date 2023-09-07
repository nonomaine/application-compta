<template>

  <canvas id="myChart"></canvas>
  
  </template>


<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

onMounted(() => {
  
  const ctx = document.getElementById('myChart');

  new Chart( ctx as HTMLCanvasElement , {
    type: 'pie',
    data: {
      labels: ['Non echue', 'En retard', 'En retard'],
      
      datasets: [{
        label: '# of Votes',
        data: [5, 8, 3,],
        backgroundColor: [
        "#f8c237",
        "#2c5282",
        "#0e8ead"

        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    },
    
  });

})
  




//  defineProps<{
//   products: ProductInterface[];
  
// }>();


</script>

<style lang="scss" scoped>
 #myChart{
        cursor: pointer;
     }
</style>