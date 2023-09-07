<script setup lang="ts">
import type { ProductInterface } from '../../../interfaces/Product.interface';
import calendarList from './calendarList.vue'
import {computed, onMounted, ref} from'vue'
import product from '@/data/product';
import calendar from './calendar.vue'
import modal from '@/components/Modal/Mission/ModalPageMission.vue'
import dayjs from 'dayjs'
import type { weekInterface } from '@/interfaces/Week.interface';


const emit = defineEmits<{
   (e: 'changeMonth', month:string): string, 
   (e:'changeWeek', week:weekInterface )
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
  emit('changeMonth', monthPlus);
  mois.value = monthPlus
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
  emit('changeMonth', monthMoins);
  mois.value = monthMoins
  return monthMoins;
  
}
console.log(monthBefore())


 
const open =ref(false);


const showSemaine =ref(false);
const showMois =ref(false);




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
    emit('changeWeek', {dateStart:dateM1, dateEnd:dateM2})
    return ((Date.parse(a.date)) >= dateM1 && (Date.parse(a.date)) < dateM2);

  });

  function calculWeek(){
    showSemaine.value=!showSemaine.value
    const dateStart= Date.now()
    const dateEnd = dateM1 + cinqJoursEnMillisecondes;
    emit('changeMonth', '');
    emit('changeWeek', {dateStart:dateStart, dateEnd:dateEnd})
  }

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
     
       

      
         <div class="intro d-flex flex-row align-items-center">

           <h2 class="m-30">Agenda</h2>
         </div>
         <div class="d-flex flex-row align-items-center justify-content-center">
            <h4 class=" d-flex flex-row align-items-center"> <span class="pr-20">
               <img src="@/assets/icons/left-arrow.png" width="15" alt="" @click="monthBefore()"></span >  {{ mois }} <span class="pl-20">

              <img src="@/assets/icons/right-arrow.png" width="15" alt="" @click="monthLater()" ></span>
            </h4>
          </div>
         <div class= "chips-all d-flex flex-row align-items-center justify-content-center p-30">
            <div class="chips-total">
              <button class="chips btn-segondary m-30" @click="calculWeek">Hebdomadaire</button>
               <img src="@/assets/icons/next-week.png" class="img1" width="30" alt="">
            </div>
            <div class="chips-total ">
              <button  class="chips btn-segondary m-30" @click="showMois=!showMois">Mensuelle</button>
               <img src="@/assets/icons/appointment.png" class="img1" width="30" alt="">
            </div>
            <!-- <div class="chips-total">
              <button class="chips btn-segondary m-30">Trimestrielle</button>
               <img src="@/assets/icons/business-report.png" class="img1" width="30" alt="">
            </div> -->
          </div>
         
        

              
              
              
          
        
     
          </div>


    <Transition  appear name="fade">
      <modal v-show="open" @close-modal="open = false"/>
    </Transition>

</template>

<style lang="scss" scoped>


.container-block{
  width:100%;
  height:100%;
  
}





.intro{
  
  height:20%;
  justify-content: flex-start;
}
.chips-total{
  position: relative;
  padding-top: 50px;
}


.img1{
  position: absolute;
  right: 40%;
  top:10%;   
}

.chips-all{
  width: 80%;
  border-bottom: var(--border-1);
  margin:0 auto;
}

h2, h4{
  color: var(--text-segondary-color)
}
.mission{
  height: 100%;
  display: grid;
  grid-template-areas: 'control-mission' 'list-mission';
  grid-template-columns: 20% 80%;
    
}
.control-mission h4{
  margin: 30px auto;
}
input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
}
input[type=checkbox] {
    border-radius: 4px;
    height: 15px;
    width: 15px;
    background: #fff;
    border: 2px solid #666f7b;
}

input.checkbox{
  margin-left:30PX;
}
input[type=checkbox].checkbox-basse{
  border: 2px solid var(--fourth-1);
}
input[type=checkbox].checkbox-normal{
  border: 2px solid var(--second-1);
}
input[type=checkbox].checkbox-haute{
  border: 2px solid var(--third-1);
}

input[type="checkbox"]:checked {
  
 
  position: relative;
  &:before {
    font-family: FontAwesome ;
    content: "\f00c";
    display: block;
    color: grey;
    font-size: 13px;
    position: absolute;
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
  transition: all 0.4s;
  
}
@media(max-width: 400px){
  .chips{
    margin: 30px 10px;
  }
}

</style>