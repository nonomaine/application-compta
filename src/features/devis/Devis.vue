<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import type { AdminInterface } from '@/interfaces/Admin.interface';
import {computed, reactive, ref} from'vue'
import data from '@/data/product';
import dataAdmin from '@/data/admin';
import ModalContact from '@/components/Modal/Contact/ModalContact.vue';
import Service from '@/features/factures/services/services.vue';
import Remises from '@/features/factures/services/remises.vue';
import Acompte from '@/features/factures/services/acompte.vue';
import Paiement from '@/features/factures/services/paiement.vue';
import PiedDePage from '@/features/factures/services/pieddepage.vue'
import GraphiquesCirculaires from '@/features/dashboard/graphiques/GraphiquesCirculaires.vue'

const state = reactive<{
  products: ProductInterface[];

}>({
  products: data,

});
const admin = reactive<{
  productsAdmin: AdminInterface[];

}>({
  productsAdmin: dataAdmin,

});

const open =ref(false);

const openCloseText=computed(() => 
open ? 'Nouvelle Mission' : 'Fermer la modal')
const openCloseTextClient=computed(() => 
open ? 'Ajouter Client' : 'Fermer la modal')


var cache = {};
const metier =state.products.filter(function(elem,index,array){
  if(elem.entreprise != ''){
   return cache[elem.entreprise]?0:cache[elem.entreprise]=1;
  }
});



</script>

<template>
  
<div class="container-block d-flex flex-column">
     
   <div class="container-btn d-flex flex-row align-items-center mr-30" >
   </div>
       <!-- fin du container button: nouvelle mission -->
   <div class="container-ind d-flex flex-row justify-content-between ">
        <div class="container-ind-left">
            <div class="container-calendrier d-flex flex-column ">
             <div class="intro d-flex flex-row align-items-center">
               <h2 class="m-30">Coordonnées</h2>
             </div>
             <div class="factures d-flex flex-row align-items-center">
               <h4 class="pb-5">{{ admin.productsAdmin[0].entreprise.raisonSociale }}</h4>
             </div>
             <div class="mission d-flex align-items-center ml-30">
               <div class="control-mission d-flex flex-column  ">
                <p class="">{{ admin.productsAdmin[0].entreprise.adresse }}</p>
                <p class="">{{ admin.productsAdmin[0].entreprise.codepostal }} {{ admin.productsAdmin[0].entreprise.ville }}</p>
                <p class="">{{ admin.productsAdmin[0].entreprise.pays }}</p>
                <p class="">{{ admin.productsAdmin[0].identite.email }}</p>
               </div>
              </div>
            </div>
        </div>
        
         <div class="container-ind-right d-flex flex-column align-items-center justify-content-evenly mr-30">
            <div class="select-control" >
                <select  name="entreprise" >
                    <option value="" selected> Entreprise </option>
                    <template v-for="med of metier">
                    <option> {{ med.entreprise }}</option>
                    </template>
                </select>
            </div>
                <h4>Ou</h4>
                <button @click="open = !open" class="btn btn-primary d-flex flex-row align-items-center" id="btn-absolute">
                  <img class="icon" src="@/assets/icons/plus.png " width="15"  alt="">Nouvelle entreprise
                </button>
            </div>
         </div>
         <!-- fin du container-ind: premiere section -->
  <div class="finish d-flex flex-row align-items-center justify-content-center"></div>
  <div class="container-facture d-flex mt-100">
    <div class="container-facture-bloc d-flex flex-column mr-30 pt-50">
        <div class="facture-bloc-top d-flex flex-row align-items-center justify-content-center pl-30">
          <div class="item2 d-flex flex-column">
            <h4>Date de la facture</h4>
            <div class="input-control pt-10">
              <input type="date" placeholder="date">
            </div>
          </div>
          <div class="item2 d-flex flex-column ">
            <h4 class="">Date d'échéance</h4>
            <div class="input-control pt-10">
              <input type="date" placeholder="date">
            </div>
          </div>
        </div>
        <div class="facture-bloc-middle d-flex flex-column pt-50 ml-30">
            <h4 class="pt-20 pb-20">Services:</h4>
            <Service />
        </div>
    </div>
</div>
    <div class="container-remise d-flex mt-100">
        <div class="container-facture-bloc d-flex flex-column mr-30 pt-50 pb-50">
            <h4 class="ml-30">Remises:</h4>
           <Remises />
          </div>
        </div>
    <div class="container-remise d-flex mt-100">
        <div class="container-facture-bloc d-flex flex-column mr-30 pt-50 pb-50">
            <h4 class="ml-30">Acompte:</h4>
            <Acompte />
          </div>
        </div>
    <div class="container-remise d-flex mt-100">
        <div class="container-facture-bloc d-flex flex-column mr-30 pt-50 pb-50">
            <h4 class="ml-30">Condition de paiements:</h4>
            <Paiement />
          </div>
        </div>
    <div class="container-remise d-flex mt-100">
        <div class="container-piedpage-bloc d-flex flex-column mr-30 pt-50 pb-20">
          <div class="text ml-30 mr-30">
          <h4 class="pb-20">Pied de Page :</h4>
          </div>
            <PiedDePage />
          </div>
        </div>
        <div class="validation d-flex flex-row align-items-end justify-content-evenly pb-20">
                <div class="total d-flex flex-column">
                  <p>Total:</p>
                  <h2>150.00€ HT</h2>
                </div>
                <div class="total d-flex flex-column">
                  <button class="btn btn-primary">Valider et générer</button>
                </div>
                </div>
</div>
   
<Transition  appear name="fade">
    <ModalContact v-show="open" @close-modal="open = false"/>
    <!-- <ModalContact v-show="open" @close-modal="open = false"/> -->
</Transition>
</template>

<style lang="scss" scoped>

.container-block{
  width:100%;
  height:100%;
}

.container-btn{
  height: 150px;
  justify-content: flex-end;
}

.container-calendrier{
  width:100%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}

.icon{
  margin-right: 10px;
}
.intro{
  height:20%;
  justify-content: flex-start;
}

.factures{
  max-width: 90%;
  border-bottom: var(--border-1);
  margin:0px 30px 0px;
  h4{
    padding-bottom: 5px !important;
  }
}

h2, h4{
  color: var(--text-segondary-color)
}
.mission{
  //margin: auto;
  width: 90%;
  height: auto;
  
    
}
.control-mission h4{
  margin: 30px auto;
}
.control-mission p{
  padding-bottom: 5px !important;
  padding-top:10px !important;
}


.control-mission h4{
  margin: 30px auto;
}

.container-ind{
  width:100%;   
}
.container-ind-left{
  width:30%;
}
.container-ind-right{
  width:50%;
  background-color: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
 
}

.select-control{
    
    display: flex;
    align-items: center;
    min-width: 300px;
    max-width: 450px;
   // background-color: var(--gray-1);
    border-radius:6px;
    padding:10px 15px;
}

.select-control select{
    width: 100%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border:#f9f9f9 solid 2px;
    color: white;
    border-radius: 2px;
    background-color: var(--second-1);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)
}
option{
    background-color: white;
    color: var(--text-segondary-color)
}
.finish{
  height:100px;
  width: 80%;
  border-bottom: var(--border);
  margin: auto;  
}
.container-facture{
  width:100%;
  height: auto;
}
.container-facture-bloc{
  width:100%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 50px;
}
.container-piedpage-bloc{
  width:100%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  
}
.facture-bloc-top{
    width: 100%;
}

.item2{
    width:50%;
    
}
.input-control input{
  
    min-width: 40%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: #09023906 solid 2px;
    color: var( --text-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)
    
}
.input-control input#plus{
  width: 60%;   
}
.input-control ::placeholder{
    color: #838f9f;
    font-size: 14px;
}
.text{
  border-bottom: var(--border-1);
}
.validation{
  background: white;
  height: auto;
  padding-right: 0px;
  margin-top: 100px;
  border: 1px solid var(--second-1);
  
}
.total{
  height: 100%;
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
  .container-ind-left{
    width:40%;
  }
}

@media(max-width:776px){
  // .container-ind-right{
  //   width:55%;
  //   margin-right: 10px; 
  // }
  .facture-bloc-top{
    flex-wrap: wrap;
    margin-left: 30px;

  }
  .item1{
    width:100%;
    margin-left: 0;
    margin-bottom: 30px;
   
  }
  .item2 {
    width:50%;
  }
  
  .container-btn{
    height:100px;
  }
  .container-ind{
    display:flex;
    flex-direction:column !important;
    justify-content: center !important;
    gap:50px;
  }
  .container-ind-left{
    width:60%;
    align-self: flex-end;
  }
  .container-calendrier{
    padding-bottom: 10px;
    align-items: flex-end;
  }
  .mission{
    justify-content: flex-end;
    margin-right: 30px;
    margin-left:0;
    p{

      text-align:end;
    }
   
  }
  .container-ind-right{
    margin-right:10px;
    width:100%;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    border:none;
    display: flex;
    flex-direction:row !important;
    justify-content: space-between;
    h4{
      display:none;
    }
  }
  .container-facture-bloc,.container-piedpage-bloc{
    margin-right: 10px;
  }
  .select-control{
    padding:10px 0;
    min-width:180px;
    max-width: 240px !important;
  }
  .finish{
    height:50px;
  }
}
@media(max-width:580px){
  
  .container-ind-left{
    width:80% !important; 
    align-self: flex-start; 
  }
  .container-calendrier{
    align-items: flex-start;
  }
  .mission{
    justify-content: flex-start;
    margin-right: 0px;
    margin-left:30px;
    p{

      text-align:start;
    }
    
  }
  .container-ind-right{
    position: relative;
    margin-right:10px;
    width:100%;
    //margin-top: 50px;
    display: flex;
    flex-direction:column !important;
    align-items: flex-start;
    gap:20px;
    h4{
      display:none;
    }
  }
  .btn#btn-absolute{
  //align-self: flex-end;
  position:absolute;
  right:0;
  top:190%;
  }
  .select-control{
    padding:10px 0;
    min-width:180px;
    max-width: 200px !important;
  }
  .facture-bloc-middle{
    margin-left:0;
    h4{
      margin-left: 30px;
    }
  }
}
@media(max-width:480px){
  .container-facture-bloc{
    margin-right: 0;
  }
  .container-ind-left{
    width:100% !important; 
    align-self: flex-start; 
  }
  .item1{
    width:100%;
    .input-control{
      padding-top: 10px !important;
    }
  }
  .item2{
    width:100%;
    .input-control{
      padding-top: 10px !important;
    }
  }
  .item2{
    margin-bottom: 30px !important;
  }
}
.facture-bloc-middle{
  padding-top: 0;
}

</style>