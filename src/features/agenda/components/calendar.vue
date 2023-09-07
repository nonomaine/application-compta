<script setup lang="ts">
import type { ProductInterface } from '../../../interfaces/Product.interface';
import calendarList from './calendarList.vue'
import {computed, onMounted, ref, type Ref} from'vue'
import product from '@/data/product';

import priorityFilter from './priorityFilter.vue'
import productMonth from './productMonth.vue'
import modal from '@/components/Modal/Mission/ModalPageMission.vue'
import dayjs from 'dayjs'
import type { weekInterface } from '@/interfaces/Week.interface';
function changeWeek (week:weekInterface){
  weekDate.value=week
}
function changeMonth(date:string){
  mois.value=date;
}
function changeColor(colors:string[]){
  primaryColor.value=colors;
}

const weekDate:Ref<weekInterface>= ref({} as weekInterface)

const primaryColor =ref([])
 
defineProps<{
  products: ProductInterface[];
  
}>();


const formatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
 
const formatterMonth = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' });
 

const moisArray= ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','decembre']
//  const moisNumber=new Date().toLocaleDateString();
//  console.log(moisNumber)

 let maDate = new Date();

// Obtenez le mois de la date sous forme de chaîne de caractères
let mois = ref(maDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric'}));

// Affichez le mois
//console.log(mois);  // Résultat : "juin 2023"


const monthLater= function passerMoisSuivant() {
  const dateSuivante = new Date(maDate);
  dateSuivante.setMonth(dateSuivante.getMonth() + 1);
  maDate= dateSuivante;
  const dateFormatee = formatterMonth.format(dateSuivante);
  const monthPlus=dateFormatee.toLocaleString();
  console.log(monthPlus);
  return monthPlus;
  
}
console.log(monthLater())

const monthBefore= function passerMoisAvant() {
  const dateSuivante = new Date(maDate);
  dateSuivante.setMonth(dateSuivante.getMonth() - 1);
  maDate= dateSuivante;
  const dateFormateeBefore = formatterMonth.format(dateSuivante);
  const monthMoins=dateFormateeBefore.toLocaleString();
  console.log(monthMoins);
  return monthMoins;
  
}
console.log(monthBefore())


 
const open =ref(false);





const boxColor = computed(() =>
{
  let productFiltered= product.filter(product => primaryColor.value.includes(product.color))
  if(mois.value){
    productFiltered=productFiltered.filter(product=>formatterMonth.format(new Date(product.date))==(mois.value))
  }else{
    productFiltered=productFiltered.filter(product =>(Date.parse(product.date)) >= dateM1 && (Date.parse(product.date)) < dateM2)
  }
   return productFiltered

}
);

 const dateM= new Date()
const dateM1= Date.now()

const dateMission = new Date().toLocaleDateString();
let dateMission1 = parseInt(((new Date().toLocaleDateString()).split('/')).join(''));

console.log(dateMission);
console.log(dateMission1);

console.log(dateM);
console.log(dateM1);
const cinqJoursEnMillisecondes = 5 * 24 * 60 * 60 * 1000;
console.log(cinqJoursEnMillisecondes);
const dateM2 = dateM1 + cinqJoursEnMillisecondes;
console.log(dateM2)

var resultProductDataSemaine = product.filter(
  function (a) {
    return ((Date.parse(a.date)) >= dateM1 && (Date.parse(a.date)) < dateM2);
  });
  console.log(resultProductDataSemaine);

// const dateStr = product[1].date;
// const miDate = new Date(dateStr);
// console.log(miDate)



// var dateFormat= product.map(
// product => new Date(product.date)
//  )
//  console.log(dateFormat[2]);

//const dateFormatee = formatter.format(dateFormat);
// console.log(dateFormatee)

// var newDateFormat= dateFormat.map(
//   elem=>formatter.format(elem)
  
// )
// console.log(newDateFormat[50])

 var resultProductDataMois = product.filter(
    function (a) {
      return formatterMonth.format(new Date(a.date))==(mois.value)
       });

  console.log(resultProductDataMois);
 
// Résultat : '11 juin 2023' 

// var productDataMois= product.forEach(
//   product => product.date = new Date(product.date);
//   console.log(product);
// )

//   const dateStr = '2023-06-11';
//  const miDate = new Date(dateStr);
//  const options = { day: 'numeric', month: 'long', year: 'numeric' };
//  const dateFormatee = miDate.toLocaleDateString('fr-FR', options);
//  console.log(dateFormatee); // Résultat : '11 juin 2023'


  // var DateRetouché = product.forEach(
  // function (a) {
  //   return a.date = new Date(a.date).toLocaleDateString();
  // });
  // console.log(product[1].date);
  
// const parts = product.forEach(
// function(a){

//   a.date.split("/");
//   const moisi = parseInt(parts[0]) - 1; // Soustraire 1 pour obtenir l'index du mois (janvier est 0)
//   const annee = parseInt(parts[2]);
//   const maDate = new Date(annee, moisi);
//   console.log(maDate.toLocaleString("fr-FR", { month: "long" }));
// }
// )



// // Affichez le résultat
// console.log(listeObjets);
// console.log(product)

</script>

<template>
  <div class="container-block d-flex flex-column">
     
    <div class="container-btn d-flex flex-row align-items-center mr-30" >
         <button @click="open = !open" class="btn btn-primary d-flex flex-row align-items-center">
          <img class="icon" src="@/assets/icons/plus.png " width="15"  alt="">Ajouter une mission 
         </button>
    </div>


    <div class="container-calendrier d-flex flex-column ">
     <productMonth @change-month="changeMonth"/>

     <div class="task pt-50">
       <div class="filter">
          <priorityFilter @change-color="changeColor" />
       </div>
       <div class="list-task">
          <calendarList :products="boxColor" />
       </div>

     </div>
     <Transition  appear name="fade">
      <modal v-show="open" @close-modal="open = false"/>
     </Transition>
   </div>

</div>
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
.icon{
  margin-right: 10px;
}

.container-calendrier{
  width:85%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}
.task{
  display: grid;
  width: 100%;
  grid-template-areas: 'filter' 'list-task';
  grid-template-columns: 20% 80%;
}

@media (max-width: 1279px){
  .container-calendrier{
  width:100%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}
}
@media (max-width: 999px){
  .task{
  display: grid;
  width: 100%;
  grid-template-areas: 'filter' 'list-task';
  grid-template-columns: 35% 60%;
}
}
@media (max-width: 776px){
  .task{
  display: block; 
  padding: 0 10px;
  margin: 0 auto;
  
}
.filter{
  width:100%;
  display: flex;
  flex-direction:row;
}
.container-btn {
  height: 100px;
  .btn{
    display: none !important;
  }
  }
}

</style>