<script setup lang="ts">
 import{ref} from 'vue'
  const bbn = ref(false);
 

  const emit = defineEmits<{
   (e: 'changeClass'): boolean
 }>();

 const rotate=ref(false);
</script>

<template>
  <header >
    <div class="header-box ">
     
                
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-box{
    position: relative;
    height: 64px;
    width:100%;
    background: linear-gradient(to right, #14819c, var(--primary-4)) ;
    z-index:3000;
    
}


</style>