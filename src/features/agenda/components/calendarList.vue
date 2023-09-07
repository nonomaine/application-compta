<script setup lang="ts">
import calendarComposant from './calendarComposant.vue'
import type { ProductInterface } from '@/interfaces/Product.interface';



const props=defineProps<{
  products: ProductInterface[];
  
}>();




</script>

<template>
    <div class="grid mt-20">

        <calendarComposant v-for="product of products" :product="product"/>
      
    </div>
</template>

<style lang="scss" scoped>
@use './src/assets/mixins' as m;
.grid{
    
    display: grid;
    
    grid-template-columns: 1fr;
     @include m.md {
    grid-template-columns: 1fr 1fr ;
  }
  @include m.lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include m.xl {
    grid-template-columns: 1fr 1fr 1fr 1fr;
   }
    grid-auto-rows: 200px;
    gap: 10px;
  

}

@media (max-width:776px){
  .grid{
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    
  }
}
@media (max-width:480px){
  .grid{
    width:100%;
    display:grid;
    grid-template-columns: 1fr ;
    justify-items: center;
    
  }
}
</style>