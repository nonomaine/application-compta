<template>
 <canvas id="maChart"></canvas>
</template>
  
  
  <script setup lang="ts">
  import Chart from 'chart.js/auto';
  import { onMounted } from 'vue';
  
  onMounted(() => {
    
    const ctx = document.getElementById('maChart');
  
    new Chart( ctx as HTMLCanvasElement , {
      type: 'bar',
      data: {
        labels: ['Septembre', 'Octobre', 'Novembre', 'Decembre'],
        
        datasets: [{
          label: "clients principaux",
          data: [20, 50, 40, 60],
          backgroundColor: [
          "#2c5282",
        ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
     
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
     
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart'
      }
    }
      },
      
    });
  
  })
</script>
  
<style lang="scss" scoped>
   #maChart{
        cursor: pointer;
     }
</style>