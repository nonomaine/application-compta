<template>
 <canvas id="miChart"></canvas>
</template>
  
  
  <script setup lang="ts">
  import Chart from 'chart.js/auto';
  import { onMounted } from 'vue';
  
  onMounted(() => {
    
    const ctx = document.getElementById('miChart');
  
    new Chart( ctx as HTMLCanvasElement , {
      type: 'bar',
      data: {
        labels: ['Septembre', 'Octobre', 'Novembre', 'Decembre'],
        
        datasets: [{
          label: "chiffres d'affaires",
          data: [20, 50, 40, 60],
          backgroundColor: [
          "#2c5282",
        ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            
          }
        }
      },
      
    });
  
  })
</script>
  
<style lang="scss" scoped>
   #miChart{
        cursor: pointer;
     }
</style>