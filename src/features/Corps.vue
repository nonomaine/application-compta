<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import { reactive } from 'vue';
import data from '@/data/product';
import type { PageInterface } from '@/interfaces/page.interface';
import dataPage from '@/data/page';

const state = reactive<{
  products: ProductInterface[];
  pages: PageInterface[];
  
}>({
  products: data,
  pages:dataPage,
});


</script>

<template>
  <div class="container1" :products="state.products">
    <transition name="fade" >
    </transition>
    <router-view />
  </div>
  
</template>

<style lang = "scss">

.container1{
    
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 100px;
    //background: #000;
   
    
}
@media (max-width: 1280px){
  .container1{
    
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 100px;
    //background: #000;   
}
}
@media (max-width: 580px){
  .container1{
    
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 100px;
    //background: #000;   
}
}

.fade-enter-from,
 .fade-leave-to {
   opacity: 0;
 }

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 2s;
  
}

</style>
