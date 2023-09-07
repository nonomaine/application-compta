<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import {computed, ref} from'vue'
import barometre from '@/features/dashboard/barometre/Barometre.vue'
import previsionnel from '@/features/dashboard/previsionnels/Previsionnel.vue'
import activite from '@/features/dashboard/activité/Activite.vue'
import modal from '@/components/Modal/Mission/ModalPageMission.vue'
import ModalContact from '@/components/Modal/Contact/ModalContact.vue'
import GraphiquesCirculaires from '@/features/dashboard/graphiques/GraphiquesCirculaires.vue'



const open =ref(false);

const openCloseText=computed(() => 
open ? 'Nouvelle Mission' : 'Fermer la modal')






</script>

<template>
  <div class="container-block d-flex flex-column">
         
       <div class="container-btn d-flex flex-row align-items-center mr-30" >
             <button @click="open = !open" class="btn btn-primary d-flex flex-row align-items-center">
              <img class="icon" src="@/assets/icons/plus.png " width="15"  alt="">{{ openCloseText }}
             </button>
           </div>
           <!-- fin du container button: nouvelle mission -->
       <div class="container-ind d-flex flex-row">
            <div class="container-ind-left">
    
              <div class="container-calendrier d-flex flex-column ">
                <div class="intro d-flex flex-row align-items-center">
                  <h2 class="m-30">Indicateurs clés</h2>
                </div>
                
                 <div class="factures d-flex flex-row align-items-center ml-30">
                   <h4 >Factures</h4>
                 </div>
                 <div class="mission">
                   <div class="control-mission d-flex flex-column justify-content-center ">
                    <div class="mission-1 d-flex flex-row align-items-center mt-50 pb-20">
                       <div class="bubbleyellow"></div>
                       <h5>Non échues</h5>
                     </div>
                     <div class="mission-1 d-flex flex-row align-items-center pt-20 pb-20">
                       <div class="bubblebleu"></div>
                       <h5>En retard (-30j)</h5>
                     </div>
                     <div class="mission-1 d-flex flex-row align-items-center pt-20 pb-20">
                       <div class="bubblegreen"></div>
                       <h5>En retard (+30j)</h5>
                     </div> 
                   </div>
                   <div class="list-mission d-flex flex-row align-items-center justify-content-evenly" >
                      <div class="graphiques ">
       
                       <GraphiquesCirculaires />
                      </div>
                   </div>
                 </div>
             </div>
            </div>
            <!-- fin du container indicateurs clés:  -->
             <div class="container-ind-right d-flex flex-column align-items-center justify-content-center">
               <div class="chiffres1 d-flex flex-row justify-content-center">
                 <div class="boxchiffres d-flex flex-column align-items-center justify-content-center">
                  <div class="ca d-flex flex-column justify-content-center">
                    <h4 class="ml-20"> CA: </h4> 
                    <h5 >novembre 2022</h5>
                  </div>
                  <div class="ca1 d-flex align-items-center justify-content-end">
                    <h4 class="mr-20">1500,00€</h4>
                  </div>
                 </div>
                <div class="boxchiffres d-flex flex-column align-items-center justify-content-center">
                  <div class="ca d-flex flex-column justify-content-center">
                    <h4 class="ml-20"> Encaissé: </h4> 
                    <h5 >novembre 2022</h5>
                  </div>
                  <div class="ca1 d-flex align-items-center justify-content-end">
                    <h4 class="mr-20">1500,00€</h4>
                  </div>
                   </div>
               
              </div>
              
              <div class="chiffres1 d-flex flex-row lign-items-center justify-content-center">
                <div class="boxchiffres d-flex flex-column align-items-center justify-content-center">
                  <div class="ca d-flex flex-column justify-content-center">
                    <h4 class="ml-20"> CA: </h4> 
                    <h5 >Année 2022</h5>
                  </div>
                  <div class="ca1 d-flex align-items-center justify-content-end">
                    <h4 class="mr-20">25000,00€</h4>
                  </div>
                   </div>
                <div class="boxchiffres d-flex flex-column align-items-center justify-content-center">
                  <div class="ca d-flex flex-column justify-content-center">
                    <h4 class="ml-20"> Décaissée: </h4> 
                    <h5 >novembre 2022</h5>
                  </div>
                  <div class="ca1 d-flex align-items-center justify-content-end">
                    <h4 class="mr-20">1500€</h4>
                  </div>
                </div>
              </div>
    
        </div>
        <!-- fin du container chiffres clés:  -->
      </div>
    
       <barometre />
       <previsionnel />
       <activite />
    </div>
 
   
  <Transition  appear name="fade">
    <modal v-show="open" @close-modal="open = false"/>
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
.chips-total{
  position: relative;
  padding-top: 50px;
}


.img1{
  position: absolute;
  right: 40%;
  top:10%;   
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
  display: grid;
  grid-template-areas: 'control-mission' 'list-mission';
  grid-template-columns: 30% 70%;
    
}
.control-mission h4{
  margin: 30px auto;
}

.bubbleyellow {
  background-color: var(--second-1);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 30px;
}
.bubblebleu {
  background-color: #2c5282;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 30px;
}
.bubblegreen {
  background-color: var(--primary-1);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 30px;
}
h5{
  padding-left: 10px;
}

.graphiques{
padding-top: 30px;
 width: 45%;
}
.container-ind{
  width:100%;
  
}
.container-ind-left{
  width:55%;
}
.container-ind-right{
  
  border-radius: 30px;
  width:40%;
  margin-left: 100px;
 
}
.chiffres1{
 
  width: 100%;
  height: 40%;
  padding : 5% 0;
 
}
.boxchiffres{
  width: 50%;
}
.ca{
  width: 150px;
  height:45%;
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
  height:24%;
  border-radius: 0 0 4px 4px;
  background-color:rgba(255, 255, 255, 0.45);
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(0.25turn, rgba(255, 248, 34, 0.718), rgba(248,194,55), rgba(56,2,155,0));
  border-image-slice: 1;
  
}

.finish{
  width: 80%;
  height: 100px;
  border-bottom: var(--border-1);
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

@media (max-width:1400px){
  .container-ind-left{
    width:60%;
  }
  .container-ind-right{
    margin-left: 10px;
  }
}
@media (max-width:1200px){
  .mission{
    display:flex;
    flex-direction: column;
  }
  .control-mission{
    width: 100%;
    display:flex;
    flex-direction: row !important;
    align-items: center;
  }
  .mission-1{
    width:32%;
    margin-left:10px;
    padding:20px 0;
    margin-top: 0px;
    display:flex;
    flex-direction:column !important;
    align-items: flex-start;
  }
   .bubblebleu, .bubbleyellow, .bubblegreen {
    margin-left: 10px;
    margin-bottom: 10px; 
   }
   .ca{ 
    height: 25%;  
   }
   .ca1{
    height:15%;
   }

}

@media (max-width:1100px) {
  .container-ind{
    flex-wrap:wrap;
    justify-content: center;
  }
  .container-ind-left{
    width: 90%;
  }
  .mission {
    height: 100%;
    display: grid;
    grid-template-areas:
        "control-mission"
        "list-mission";
    grid-template-columns: 30% 70%;
  }
  .control-mission{
    width: 100%;
    display:flex;
    flex-direction: column !important;
    align-items: center;
  }
  .mission-1{
    width:100%;
    margin-left:10px;
    padding:20px 0;
    margin-top: 0px;
    display:flex;
    flex-direction:row !important;
    align-items: flex-start;
  }
   .bubblebleu, .bubbleyellow, .bubblegreen {
    margin-left: 30px;
    margin-bottom: 10px; 
   }
   .mission-1:nth-child(1){
    margin-top: 20px;
  
   }
  .container-ind-right{
    width: 100%;
    display:flex;
    flex-direction: row !important;
    align-items: center;
    justify-content:space-between;
    height: 170px;
    margin-left: 0px;
  }
  .chiffres1{
    width:50%;
    height: 100%;
    flex-wrap: wrap;
  }
  .ca{ 
    height: 60%;  
   }
   .ca1{
    height:35%;
   }

  @media (max-width:950px){
    .container-ind-left{
    width: 90%;
  
  }
    .container-ind-right{
      display:flex;
      flex-direction:column !important;
      height: 300px;
    }
    .chiffres1{
      width: 90%;
    }
  }

  @media(max-width:830px){
    .mission{
    display:flex;
    flex-direction: column;
  }
  .control-mission{
    width: 100%;
    display:flex;
    flex-direction: row !important;
    align-items: center;
  }
  .mission-1{
    width:32%;
    
    margin-left:10px;
    padding:20px 0;
    margin-top: 0px;
    display:flex;
    flex-direction:column !important;
    align-items: flex-start;
  }
  .mission-1:nth-child(1){
    margin-top: 0;
  }
   .bubblebleu, .bubbleyellow, .bubblegreen {
    margin-left: 10px;
    margin-bottom: 10px; 
   }
   .container-ind-right{
    margin-top: 30px;
   }
  }
  @media (max-width:580px){
    .container-btn{
      height: 100px;
      .btn{
        display:none !important; 
      }
    }
    .container-ind-left{
    width: 100%;
  }
  .chiffres1{ 
    width: 100%;
  }
}
  @media (max-width:450px){
    .ca{
      height: 45%;
      width: 80%;
      h4,h5{
        margin: 0;
        padding-left:10px;
        padding-right:10px;
      }
      h4{
      padding-top: 5px;
      }
    }
    .ca1{
      height: 30%;
      width:80%;
      }
}
}
</style>