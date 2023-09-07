<script setup lang="ts">
import Theheader from'./components/header.vue';
import Thenav from'./components/nav.vue';
import Thefooter from'./components/footer.vue';


import {computed, ref} from'vue'

import Corps from './features/Corps.vue'



const box =ref(true);
// const state = reactive<{
//   products: ProductInterface[];
  
// }>({
//    products: data,
 
//  });
const openNavigation = ref(true);


function changeClass(){
  console.log('alo')
  openNavigation.value = !openNavigation.value;
}


// const boxYellow = computed(() =>
//   state.products.filter(product => product.color === 'yellow')
// );


//const emit = defineEmits<{
   //(e: 'checkBoxYellow', productColor:string): void;
//}>();

</script>

<template>
  <!-- <div class="app-container" >
    <Theheader class="header" @change-class="changeClass" />
    <Thenav class="nav" @change-class="changeClass" />
    <div class="app-content" ><Component :is="Corps" /></div>
    <Thefooter class="footer"/> 
     
     
 </div> -->
  <v-app>
    <Thenav :openNavigation="openNavigation"/>
    <Theheader @changeClass="changeClass"/>
     <v-main>
      <v-container class="v-container" >
        <Corps class="corps"/>
      </v-container>
      
    </v-main>
    
  </v-app>

</template>

<style lang = "scss" >
@import './assets/base.scss';
@import './assets/debug.scss';

// .app-container {
//   width : 100%;
//   height: 100%;
//   display: grid;
//   grid-template-areas: 'nav header' 'nav app-content' 'nav footer';
//   grid-template-columns: 15% 85%;
//   grid-template-rows: 90px auto 90px ;
//   transition: 0.2s ease-in-out;
// }
// .app-containerReduc {
//   width : 100%;
//   height: 100%;
//   display: grid;
//   grid-template-areas: 'nav header' 'nav app-content' 'nav footer';
//   grid-template-columns: 7% 93%;
//   grid-template-rows: 90px auto 90px;
  
// }

// .header {
//   grid-area: header;
// }
// .nav {
//   grid-area: nav;
  
// }
// .app-content {
//   grid-area: app-content;
  
// }
// .footer {
//   grid-area: footer;
  
//}
.v-main{
  background-color: var(--gray-1);
}


@media (min-width: 960px){

  .v-container {
      max-width: 100% !important;
  }
}

// .v-container {
//     width: 100%;
//     padding: 16px;
//     background-color: black;
//     // margin-right: auto; 
//     // margin-left: auto; 
// }
// .corps{
//   background-color: pink;
   
// }


</style>
