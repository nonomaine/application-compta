<template>
    <canvas id="meChart"></canvas>
   </template>
     
     
     <script setup lang="ts">
     import Chart from 'chart.js/auto';
     import { onMounted } from 'vue';
     
     onMounted(() => {
       
       const ctx = document.getElementById('meChart');
       const data = [{x: 'Octobre', net: 100, cogs: 50, gm: 50}, {x: 'Novembre', net: 120, cogs: 55, gm: 55}, {x: 'Décembre', net: 120, cogs: 55, gm: 75}];
       new Chart( ctx as HTMLCanvasElement , {
        type: 'bar',
  data: {
    labels: ['Octobre', 'Novembre', 'Décembre' ],
    datasets: [{
      label: 'Réglées',
      data: data,
      backgroundColor: [
          "#2c5282",
        ],
      parsing: {
        yAxisKey: 'net'
      }
    }, {
      label: 'En attentes',
      data: data,
      backgroundColor: [
          "#0e8ead",
        ],
      parsing: {
        yAxisKey: 'cogs'
      }
    }, {
      label: 'Prévisionnelles',
      data: data,
      backgroundColor: [
          "#f8c237",
        ],
      parsing: {
        yAxisKey: 'gm'
      }
    }]
  },options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
       });
     
     })
   </script>
     
   <style lang="scss" scoped>
     #meChart{
        cursor:pointer;
     }
   </style>