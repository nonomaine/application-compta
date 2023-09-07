<template>
    <canvas id="muChart"></canvas>
   </template>
     
     
     <script setup lang="ts">
     import Chart from 'chart.js/auto';
     import { onMounted } from 'vue';
     
     onMounted(() => {
       
       const ctx = document.getElementById('muChart');
     
       new Chart( ctx as HTMLCanvasElement , {
         type: 'line',
         data: {
           labels: ['Janvier', 'Février', 'Mars', 'Avril','Mai', 'Juin', 'Juillet', 'Aout','Septembre', 'Octobre', 'Novembre', 'Decembre'],
           
           datasets: [{
             label: "",
             data: [10, 13, 15, 18, 19, 20, 20, 26,25, 30, 31, 33,30, 33, 35, 40],
             fill:false,
             backgroundColor: [
             "#ff0000db",
           ],
             borderColor: [
             "#ff0000db",
           ],
             borderWidth: 2,
             tension: 0.2,
           }]
         },options: {
      plugins: {
        legend: {
          display: false,
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