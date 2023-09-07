<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import GraphiquesBatonVerticale from '@/features/dashboard/graphiques/GraphiquesBatonVerticale.vue'
import GraphiquesBatonHorizontale from '@/features/dashboard/graphiques/GraphiquesBatonHorizontale.vue'
import { computed, ref } from 'vue';
import modal from '@/components/Modal/Mission/ModalPageMission.vue'




const open =ref(false);

const openCloseText=computed(() => 
open ? 'Ajouter un client' : 'Fermer la modal')

</script>

<template>
  <div width="100%">

    <div class="finish d-flex flex-row align-items-center justify-content-center "></div>
    <div class="container-espace d-flex align-items-center" >
        <h2 class="m-30">Mon activité urgente</h2>
    </div>
   
       <!-- fin du container button: nouvelle mission -->
   <div class="container-baro d-flex flex-row ">
        <div class="container-baro-left">
           <div class="container-ca d-flex flex-column ">
             <div class="factures d-flex flex-column  ml-30">
               <h4 class="pt-30">Emploi du temps</h4>
               <div class=" factures-chips d-flex flex-row justify-content-end"> 
                <button class="chips btn-primary m-30">Ajouter</button>
              </div>
              <div class="fill"></div>
             </div>
             <div class="mission">
              <div class="factures d-flex flex-column  ml-30">
                <h5 class="pt-10">9h-12h: Projet Ibis</h5>
                <h5 class="pt-10">14h-18h: Facturation clients</h5>
                <div class="d-flex flex-row align-items-center justify-content-between">
                  <h5 class="demain pt-10">Demain:</h5> 
                <button class="chips btn-primary m-30" id="chips-1">Tout voir</button>
              </div>
                <h5 class="pt-10">9h-12h: Projet Ibis</h5>
                <h5 class="pt-10">14h-18h: Facturation clients</h5>
              </div>
             </div>
         </div>
    </div>
        <!-- fin du container indicateurs clés:  -->
        <div class="container-baro-left">
           <div class="container-ca d-flex flex-column ">
            <div class="factures d-flex flex-column ml-30">
               <h4 class=" pt-30">Devis en attente</h4>
               <div class="chips-final d-flex flex-row justify-content-between pt-30"> 
                <button class="chips btn-primary m-30">Ajouter</button>
                <button class="chips btn-primary m-30" id="chips-2">Tout voir</button>
              </div>
              <div class="d-flex justify-content-center pt-30">

                <h4>pas de devis en attente </h4>
              </div>
             </div>
             
         </div>
    </div>
        <!-- fin du container chiffres clés:  -->
    </div>
  
  </div>
<div>
  <Transition  appear name="fade">
    <modal v-show="open" @close-modal="open = false"/>
  </Transition>
</div>

</template>

<style lang="scss" scoped>


.finish{
  height:100px;
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
  margin:0 auto;
  h5{
    margin: 0;
    padding-top: 10px !important;
  }
}

h2, h4{
  color: var(--text-segondary-color)
}
.mission{
  height: 100%;
   
}


.graphiques{
padding-top: 30px;
 width: 60%;
}

.container-ind-right{
  width:50%;
}


.fill{
  width: 20%;
  border-bottom: var(--border-1);
}
.chips{
  margin: 5px 30px;
}
.demain{
  color: var(--text-segondary-color);
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
  transition: all 0.4s;
  
}

@media(max-width:950px){
  .container-baro{
    display:flex;
    flex-direction: column !important;
  }
  .container-baro-left{
    width: 90%;
    margin:auto;
    padding-bottom: 20px;
  }
  .container-ca{
    width:100%;
    margin: auto;
  }

}

@media(max-width:580px){
  .finish{
    height:50px;
  }
.chips#chips-1{
  display:none;
}
.chips-final{
  justify-content: center;
}
.chips#chips-2{
  display:none;
}
}
@media(max-width:500px){
.container-baro-left{
  width:100%;
}
.factures-chips .chips{
  margin:0 5px;

  }
}


</style>