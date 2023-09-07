<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface'
import calendarList from '@/features/agenda/components/calendarList.vue'
import {computed, onMounted, reactive, ref, watchEffect} from'vue'
import product from '@/data/product';
import data from '@/data/product';
import calendarComposant from '@/features/agenda/components/calendarComposant.vue'
import ModalContact from '@/components/Modal/Contact/ModalContact.vue'
import ModalPageMission from '@/components/Modal/Mission/ModalPageMission.vue'
import { trigger } from '@vue/reactivity';
import App from '@/App.vue';


const state = reactive<{
  products: ProductInterface[];
  
}>({
  products: data,
 
});

function openModal(){
  openMission.value=true;
  window.scrollTo({
  top: 0,
  left:0,
  behavior: "smooth",
  })
}

const select= ref("");
let selecta=ref('');

const dateM= new Date()
const dateM1= Date.now()

const dateMission = new Date().toLocaleDateString();
let dateMission1 = parseInt(((new Date().toLocaleDateString()).split('/')).join(''));

console.log(dateMission);
console.log(dateMission1);

console.log(dateM);
console.log(dateM1);


// const emit = defineEmits<{
//    (e: 'checkBoxYellow', productColor: string): void;
//  }>();

 
const open =ref(false);
const openMission =ref(false);



var cache = {};
const metier = product.filter(function(elem,index,array){
  if(elem.entreprise != ''){

    return cache[elem.entreprise]?0:cache[elem.entreprise]=1;
  }});
console.log(metier);
var metierName=metier.map(x=>x.entreprise);
console.log(metierName);

for(var i=0;i<metierName.length;i++){
  console.log(metierName[i])
}

const obj={...metierName}
console.log(obj);

// let vals=''
//  for(const[key, value] of Object.entries(obj)){
//   console.log(value)
//   vals=value
 
// }
// console.log(vals)



      //  var resultProductData = product.filter(
      //               function (a) {
                      
      //                 return (parseInt(((a.date).split('/')).join(''))) >= dateMission1;
                        
      //               });
      //       console.log(resultProductData);
var resultProductData = product.filter(
  function (a) {
    return (Date.parse(a.date) >= dateM1);
  });

    const filt = function filteredItems() {
      // Filtrer les éléments en fonction de la condition de l'entreprise générique
      const filtered = resultProductData.filter(item => metierName.includes(item.entreprise));
      console.log(filtered);
      // Limiter le nombre d'éléments à 3
      return filtered.slice(0, 3);
    }
    console.log(filt())
    console.log(resultProductData)

 // const openCloseText=computed(() => 
// open ? 'Nouvelle Mission' : 'Fermer la modal') 




//  for (let valeur of metierName){
//     valeurEntreprise += (valeur + ',');
//   }
//   console.log(valeurEntreprise);

// function value(){
//  for (let valeur of metierName){
//     console.log(valeur)
//     valeurEntreprise += valeur
//    }
//   return valeurEntreprise;
// }


function recupererValeurs(tableau) {
  var result = '';
  
  tableau.forEach(function(valeur) {
    result += valeur + '\n';
  });
  
  result = result.slice(0, -1); // Supprimer la dernière virgule et l'espace
  
  return result;
}

function getItems(){
  return resultProductData.filter(elem => select.value == elem.entreprise);
}

var valeurs = recupererValeurs(metierName);
console.log(valeurs);

let valeurEntreprise = '';
const limite = 3;
let compteur = 0;

const objetsAvecMemeValeur = resultProductData.filter(objet => {
  if (selecta.value === objet.entreprise) {
    compteur++;
    return compteur <= limite;
  }
  return false;
});

console.log(objetsAvecMemeValeur);

// var DateRetouché = product.forEach(
//   function (a) {
//     return a.date = new Date(a.date).toLocaleDateString();
//   });
//   console.log(product[1].date);

</script>

<template>
  
    <div class="container-block d-flex flex-column">
     
       <div class="container-btn d-flex flex-row align-items-center mr-30" >
         <button @click="open = !open" class="btn btn-primary d-flex flex-row align-items-center">
          <img class="icon" src="@/assets/icons/plus.png " width="15"  alt="">Ajouter un Client
         </button>
       </div>

       <div class="container-calendrier d-flex flex-column ml-30">
         <div class="intro d-flex flex-row align-items-center">
           <h2 class="m-30">Clients principaux</h2>
         </div>
         
          
          <div class="mission pb-10">
            <div class="control-mission d-flex flex-row align-items-center justify-content-center ">
              <div class="control-mission-left">
                <h5 >Missions</h5>
              </div>
              <div class="control-mission-center d-flex align-items-center justify-content-end">
                <h5>Factures en attentes</h5>
              </div>
              <div class="control-mission-right d-flex align-items-center justify-content-end">
                <h5 >factures payées</h5>
              </div> 
            </div>
            
          </div>
          <div class="clients d-flex flex-column pt-20">
            <div class="clients-box d-flex flex-row align-items-center justify-content-center">
              <div class="clients-left">
                <div class="border d-flex flex-column">
                  <div class="border-box justify-content-end"></div>
                  <h4 class="d-flex align-items-center">Ibiss</h4>
                  <div class="border-box-bottom justify-content-end"></div>
                </div>
              </div>
              <div class="clients-center d-flex align-items-center justify-content-end">
                <h4>0.00€</h4>
              </div>
              <div class="clients-right d-flex align-items-center justify-content-end">
                <h4>0.00€</h4>
              </div>
            </div>
            <div class="clients-box d-flex flex-row align-items-center justify-content-center">
              <div class="clients-left">
                <div class="border d-flex flex-column">
                  <div class="border-box justify-content-end"></div>
                  <h4 class="d-flex align-items-center">Groupe Adéquat</h4>
                  <div class="border-box-bottom justify-content-end"></div>
                </div>
              </div>
              <div class="clients-center d-flex align-items-center justify-content-end">
                <h4>150.00€</h4>
              </div>
              <div class="clients-right d-flex align-items-center justify-content-end">
                <h4>500.00€</h4>
              </div>
            </div>
            <div class="clients-box d-flex flex-row align-items-center justify-content-center">
              <div class="clients-left d-flex flex-column align-items-center justify-content-center">
                <div class="border d-flex flex-column">
                  <div class="border-box justify-content-end"></div>
                  <h4 class="d-flex align-items-center">Groupe Adécco</h4>
                  <div class="border-box-bottom justify-content-end"></div>
                </div>
              </div>
              <div class="clients-center d-flex align-items-center justify-content-end">
                <h4>600.00€</h4>
              </div>
              <div class="clients-right d-flex align-items-center justify-content-end">
                <h4 ref="selects">400.00€</h4>
              </div>
            </div>
            <div class="clients-box d-flex flex-row align-items-center justify-content-center">
              <div class="clients-left">
                <div class="border d-flex flex-column">
                  <div class="border-box justify-content-end"></div>
                  <h4 class="d-flex align-items-center">Seb</h4>
                  <div class="border-box-bottom justify-content-end"></div>
                </div>
              </div>
              <div class="clients-center d-flex align-items-center justify-content-end">
                <h4>300.00€</h4>
              </div>
              <div class="clients-right d-flex align-items-center justify-content-end">
                <h4>0.00€</h4>
              </div>
            </div>
          </div>
      </div>
      
        <div class="finish d-flex flex-row align-items-center justify-content-center "></div>
          <div class="container-espace d-flex align-items-center justify-content-between" >
        <h2 class="m-30">Mon activité par entreprise</h2>
        <button class="btn btn-primary mr-30" @click="openModal"> <img class="icon" src="@/assets/icons/plus.png " width="15"  alt="">Ajouter une mission</button>
          </div>
        </div>
        <div class="input-entreprise pb-50">
          <div class="select-control"  >
            
            <select name="entreprise" v-model="select" >
              
              <option value="" selected>Entreprise <img src="@/assets/icons/vers-le-bas.png"  width="15"></option>
                     <template v-for="med of metier">
                     <option> {{ med.entreprise }}</option> 
                     </template>
                      
                    
                    </select>
            </div>
        </div>
        <div class="container-activite d-flex justify-content-end">
          <div class="container-mission d-flex flex-column mr-30">
           <div class="intro-mission d-flex flex-row align-items-center">
             <h2 class="m-30">Missions</h2>
           </div>
              <div class="mission pb-10">
              <div class="control-mission d-flex flex-row align-items-center justify-content-start ">
                <div class="control-mission-left">
                  <h5 >Dernier client</h5>
                </div>
               
              </div>
              
            </div>
            <div class="grid-container pt-30">
              <div class="grid-item pr-10">
                <div class="grid-item-box1 d-flex align-items-center justify-content-start pb-5">
                   <h4 class="break-all" ref="selecta"> {{ select }}</h4>
                </div>
              </div>
              <div class="grid-item">
              
                  <div class="grid-item-box2  "  >

                    <template v-for="todo in getItems().slice(0,3)" :keys="todo.id " >
                      <calendarComposant :product="todo" v-if="select===todo.entreprise" />
                    </template>
                    <!-- <template v-for="todo in resultProductData.slice(0,3)" :keys="todo.entreprise">
                     <calendarComposant :product="todo" v-if ="select === ''"/>
                    </template> -->

                    <!-- <template v-for="(todo,index) in resultProductData" :keys="todo.id " >
                     <calendarComposant :product="todo" v-if="select===todo.entreprise" />
                    </template>
                    <template v-for="todo in resultProductData.slice(0,3)" :keys="todo.entreprise">
                     <calendarComposant :product="todo" v-if ="select === ''"/>
                    </template> -->

                   
                  </div>
              </div>
            </div>
            </div>
          </div>
          <Transition  appear name="fade">
            <ModalContact v-show="open" @close-modal="open = false" />
          </Transition>
          <Transition  appear name="fade">
            <ModalPageMission v-show="openMission" @close-modal="openMission = false" />
          </Transition>
<ul>
  <li></li>
</ul>
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
  width:60%;
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
  width:90%;
}

h2, h4{
  color: var(--text-segondary-color)
}
h5{
  margin-bottom: 0px;
}
.mission{
  height: 100%;
  width:90%;
  margin: 0 30px;
  border-bottom: var(--border-1);
     
}



.control-mission-left{
  width:50%;
}
.control-mission-center{
  width:25%;
}
.control-mission-right{
  width:25%;
}

.clients{
  height: 100%;
  width:90%;
  margin: 0 30px;
 
}
.clients-box{
  width:100%;
  height: 25%;
  padding: 15px 0;
  
}
.clients-left{
  width:50%;
  .border{
    width: 100%;
    height: 100%;
    border: none !important;

    .border-box-bottom{
      height:10%;
      padding-bottom: 5px;
      border-bottom: var(--border);
      width:15%;
    }
  }
}
.border-box{
  height: 10%;
}
.clients-center{
  width:25%;
  height: 100%;
  
}
.clients-right{
  width:25%;
  height: 100%;
 
}

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
.select-control{
    margin-left: 20px;
    display: flex;
    align-items: center;
    min-width: 20px;
    max-width: 350px;
    background-color: var(--gray-1);
    border-radius:6px;
    
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
.container-activite{
  height:100%;
  width: 100%;
}
.container-mission{
  width:55%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}
.grid-container{
  display: grid;
  width:90%;
  grid-template-columns: 15% 85%;
  margin: auto;
  
}

.grid-item-box2{
 display: grid;
 grid-template-columns: 33% 33% 33%;
 gap:10px;
 padding: 0 20px;
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

@media (max-width: 1600px) {
  .container-mission{
  width:70%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}
}
@media(max-width: 1350px) {
   .input-entreprise .select-control{
   max-width: 23%;
   }
 }

@media(max-width:1100px){
  .container-calendrier{
    width:80% ;
  }
  .container-mission{
    width:80% ;
  }
  .container-espace{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }
  .container-espace .btn{
  margin-left: auto;
    
  }

}
@media(max-width:950px){
  .container-mission{
    width:90% !important;
  }
  .input-entreprise .select-control{
   max-width: 30%;
   }
}
@media(max-width:880px){
  .grid-container{
    display: flex;
    flex-direction: column;
  }
}
@media(max-width:776px){
 
  .finish{
    height: 150px;
  }
  .container-espace{
    position:relative;
    height:120px;
  }
  .container-espace .btn{
  position: absolute;
  top: -85%;
  right:0px;
  //min-width: 200px;
 
    
  }
  .container-calendrier{
    width:95% ;
    margin:auto;
    
  }
  
  .container-mission{
    width:95% !important;
    margin:auto;
  }
  .input-entreprise .select-control{
   max-width: 30%;
   }
   .clients-left{
    width:40%;
  }
   .clients-center, .clients-right{
  width:30%;
  display:flex;
  align-items: center;
  justify-content: center;
 }
}
@media(max-width:700px){
.container-btn{
  margin-right: 0;
}
  .input-entreprise .select-control{
   max-width: 50%;
   }
  .container-calendrier{
    width:100% ;
    margin:auto;
  }
  .container-mission{
    width:100% !important;
    margin:auto;
  }
  .grid-item-box2{
  width: 100%;
  grid-template-columns: 50% 50%;
 }
}
.container-espace .btn{
  margin-right: 0;
}
@media(max-width:580px){
.container-btn{
  height: 100px;
}
.finish{
  height: 100px;
}
.container-espace .btn{
  position: absolute;
  top: -60%;
  right:0px;
}
}

@media(max-width:550px){
  .intro{
    width: 95%;
    h2{
      margin-left: 20px;
    }
  }
  .mission, .clients{
    width:95%;
    margin:auto 15px;
  }
  .clients-left{
    width:40%;
    .border{
      max-width:100%
    }
  }
 .control-mission-center h5{
  padding-right: 15px ;
 }
 .control-mission-right h5{
  padding-left: 15px ;
 }
}
@media(max-width:470px){
  .input-entreprise .select-control{
   max-width: 70%;
   }
  .grid-item{
    margin:auto 5px;
  }
 .grid-item-box2{
  //padding: 5px auto;
  width: 100%;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  //justify-items: center;
  

 }
 
}

</style>
