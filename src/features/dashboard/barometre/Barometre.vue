<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import GraphiquesBatonVerticale from '@/features/dashboard/graphiques/GraphiquesBatonVerticale.vue'
import GraphiquesBatonHorizontale from '@/features/dashboard/graphiques/GraphiquesBatonHorizontale.vue'
import { computed, ref } from 'vue';
import ModalContact from '@/components/Modal/Contact/ModalContact.vue'
import modal from '@/components/Modal/Mission/ModalPageMission.vue'

// defineProps<{
//   products: ProductInterface[];
  
// }>();

const open =ref(false);
// const pageNumber= ref(1);

function openModal(){
  open.value=true;
  window.scrollTo({
  top: 0,
  left:0,
  behavior: "smooth",
  })
}
// const scroll=window.scrollTo({
// top: 0,
// left:0,
// })

const openCloseText=computed(() => 
open.value ? 'Ajouter un client' : 'Fermer la modal')

</script>

<template>
  <div width="100%" >

    <div class="finish d-flex flex-row align-items-center justify-content-center "></div>
    <div class="container-espace d-flex align-items-center" >
        <h2 class="m-30">Baromètre</h2>
    </div>
   
       <!-- fin du container button: nouvelle mission -->
   <div class="container-baro d-flex flex-row ">
        <div class="container-baro-left">
           <div class="container-ca d-flex flex-column" id="ca1">
             <div class="intro d-flex flex-row align-items-center">
               <h2 class="m-30"></h2>
            </div>
            <div class="factures d-flex flex-row align-items-center ml-30">
               <h4 >Chiffres d'affaires</h4>
             </div>
             <div class="mission">
               <div class="list-mission d-flex flex-row align-items-center justify-content-center" >
                  <div class="graphiques ">
                      <GraphiquesBatonVerticale />
                  </div>
               </div>
             </div>
         </div>
    </div>
        <!-- fin du container indicateurs clés:  -->
         <div class="container-ind-right d-flex flex-column align-items-center justify-content-center">
           <div class="container-ca d-flex flex-column " >
             <div class="intro d-flex flex-row align-items-center">
               <h2 class="m-30"></h2>
            </div>
            <div class="factures d-flex flex-row align-items-center ml-30">
               <h4 >Clients principaux</h4>
             </div>
             <div class="mission">
               <div class="list-mission d-flex flex-row align-items-center justify-content-center" >
                  <div class="graphiques ">
                      <GraphiquesBatonHorizontale />
                  </div>
               </div>
             </div>
         </div>

    </div>
        <!-- fin du container chiffres clés:  -->
    </div>
    <div class="container-btn d-flex flex-row align-items-center mr-30" >
     <button @click="openModal" class="btn btn-primary d-flex flex-row align-items-center">
      <img class="icon" src="@/assets/icons/plus.png " width="15"  alt="">{{ openCloseText }}
     </button>
   </div>
   <div class="finish end d-flex flex-row align-items-center justify-content-center "></div>
  </div>

  <Transition appear name="fade">
   <ModalContact v-show="open" @close-modal="open = false" />
  </Transition>
</template>

<style lang="scss" scoped>


.finish{
  height:100px;
  width: 80%;
  border-bottom: var(--border);
  margin: auto;
  
}
.end{
  height:25px;
  width: 80%;
  border-bottom: var(--border);
  margin: auto;
  
}
.container-espace{
  height: 200px;
  h2{
    text-decoration: underline;
    text-underline-position: under;
  }
}

.container-baro{
  width:100%;
}

.container-baro-left{
  width:50%;
}
.container-ca{
  width:90%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}




.factures{
  width: 90%;
  border-bottom: var(--border-1);
  margin:0 auto;
}

h2, h4{
  color: var(--text-segondary-color)
}
.mission{
  height: 100%;
   
}
.control-mission h4{
  margin: 30px auto;
}


h5{
  padding-left: 10px;
}

.graphiques{
padding-top: 30px;
 width: 60%;
}

.container-ind-right{
  width:50%;
}

.ca{
  width: 150px;
  height:40%;
  border-radius: 4px 4px 0px 0px;
  background-color:var(--second-1);
}
.ca h5{
  padding: 0;
  margin: 0 0 0 20px;
  color: var(--text-segondary-color);
}
.ca1{
  width: 150px;
  height:22%;
  border-radius: 0 0 4px 4px;
  background-color:white;
}

.container-btn{
  height: 150px;
  justify-content: flex-end;
}
.icon{
  margin-right: 10px;
}

//animation

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
  transition: all 0.4s;
  
}
@media(max-width:1200px){
  .graphiques{
    width: 70%;
  }
}

@media (max-width:950px){
  .finish{
    height: 30px;
  }
 .container-baro{
  display: flex;
  flex-direction: column !important;
  align-items: center;
 
 }
 .container-baro-left{
  width:90%;
  
 }
 .container-ind-right{
  width:90%;
 }
 .container-ca{
  margin:auto;
 }
 .container-ca#ca1{
  margin-bottom: 30px;
 }
@media (max-width:600px){
  .finish{
    height: 30px;
  }
 
 .container-baro-left{
  width:100%;
  
 }
 .container-ind-right{
  width:100%;
 }
 .intro{
  display:none !important;
 }
 .factures h4{
  padding-top: 15px;
 }
 .graphiques{
  width:80%;
 }
 .container-btn{
      height: 100px;
     
    }
}
@media(max-width: 550px){
  .graphiques{
    width:95%;
  }
}
}
</style>