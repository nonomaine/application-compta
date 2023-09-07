<script setup lang ='ts'>
import type { ProductInterface } from '@/interfaces/Product.interface';
import {computed, ref} from'vue'
import icon from '@/src/assets/icons/plus.png';
import modalMissionBox from '@/components/Modal/Mission/Taches/ModalMissionBox.vue'
import modalPageMission from '@/components/Modal/Mission/ModalPageMission.vue'

const props = defineProps<{
  product: ProductInterface;
}>();

 //const yellow = computed(() =>(product: { color: string; }) => product.color === 'yellow' )
//const boxYellow = computed(() =>
 //product.filter(product => product.color === 'yellow')
 //);

 // var resultProductDataMonth = product.forEach(
  // function (a) {
  //   return a.date = new Date(a.date).toLocaleDateString();
  // });
  // console.log(product[1].date);
  
  function openModalMissionBox(){
  open.value=true;
  window.scrollTo({
  top: 0,
  left:0,
  behavior: "smooth",
  })
}
  function openModalPageMission(){
  page.value=true;
  window.scrollTo({
  top: 0,
  left:0,
  behavior: "smooth",
  })
}
const box=ref(true);
const open =ref(false);

const page=ref(false);

</script>

<template>
    <div  class="list-mission-box d-flex flex-column align-items-center justify-content-center">
      <div class="list-mission-box-grey d-flex align-items-center justify-content-center " v-if="props.product.horaire!= ''">
        <div class="list-mission-fixed d-flex flex-column justify-content-evenly"  v-if="props.product.tache.tache1.colordef === 'yellow'" :class="{listmissionfixedyellow: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ props.product.tache.tache1.def}} </h4>
          <div class="modification d-flex flex-row align-items-center">
            <p>Modification:</p>
            <img @click="openModalMissionBox" src="@/assets/icons/ajouter-un-bouton.png " width="15" height="15"  alt="">
          </div>
        </div>
        <div class="list-mission-fixed d-flex flex-column justify-content-evenly"  v-else-if="props.product.tache.tache1.colordef === 'green'" :class="{listmissionfixedgreen: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ props.product.tache.tache1.def}} </h4>
          <div class="modification d-flex flex-row align-items-center">
            <p>Modification:</p>
            <img @click="openModalMissionBox" src="@/assets/icons/ajouter-un-bouton.png " width="15" height="15"  alt="">
          </div>
        </div>
        <div class="list-mission-fixed d-flex flex-column justify-content-evenly"  v-else="props.product.tache.tache1.colordef === 'blue'" :class="{listmissionfixedblue: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ props.product.tache.tache1.def}} </h4>
          <div class="modification d-flex flex-row align-items-center">
            <p>Modification:</p>
            <img @click="openModalMissionBox" src="@/assets/icons/ajouter-un-bouton.png " width="15" height="15"  alt="">
          </div>
        </div>
      </div>
                <h4 class="p-10">{{ props.product.date }}</h4>
                <div v-if="props.product.color === 'yellow'" :class="{boxyellow: box}" class="box-white d-flex flex-column align-content-around">
                  <h4 class="description overflow-wrap">{{ props.product.refmission }}</h4>
                  <p class="description">{{ props.product.description}}</p>
                  
                  <p class="">{{ props.product.horaire }}</p>
                  
                  
                </div>
                <div v-else-if="props.product.color === 'green'" :class="{boxgreen: box}" class="box-white d-flex flex-column align-content-around">
                  <h4 class="description overflow-wrap">{{ props.product.refmission }}</h4>
                  <p class="description">{{ props.product.description }}</p>
                  
                  <p class="">{{ props.product.horaire }}</p>
                  
                  
                </div>
                <div v-else-if="props.product.color == 'blue'" :class="{boxblue: box}" class="box-white d-flex flex-column align-content-around">
                  <h4 class="description overflow-wrap">{{ props.product.refmission }}</h4>
                  <p class="description">{{ props.product.description }}</p>
                  
                  <p class="">{{ props.product.horaire }}</p>
                  
                  
                </div>
                <div v-else="props.product.color === ''" :class="{boxvide: box}" class="box-white ">
                  
          
                  
                    <div class= "box-height d-flex flex-column" v-if="props.product.refmission !== ''" >
                      <h4 class="description">{{ props.product.refmission }}</h4>
                       <div class="small-box d-flex flex-column justify-content-evenly"> 

                         <p class="">{{ props.product.description || `ajouter taches`}}</p>
                         <div @click="openModalMissionBox" class=" d-flex justify-content-center"> <img src="@/assets/icons/ajouter-un-bouton.png " width="20" alt=""></div>
                         <p class="">{{ props.product.horaire || `ajouter horaires`}}</p>
                       </div>
    
                    </div>
                    <div class= "box-height d-flex flex-column" v-else>
    
                      <h4 class="pl-5">{{ props.product.refmission }}</h4>
                      <p class="">{{ props.product.description || `ajouter Mission`}}</p>
                      <div @click="openModalPageMission" class=" d-flex justify-content-center"> <img src="@/assets/icons/ajouter-un-bouton.png " width="20" alt=""></div>
                      <p class="">{{ props.product.horaire || `ajouter horaires`}}</p>
                    </div>
                                   
                  </div>

                  
                  
               
              </div>
            <Transition  appear name="fade">
              <modalMissionBox v-show="open" @close-modal="open = false"/> 
            </Transition>
            <Transition  appear name="fade">
              <modalPageMission v-show="page" @close-modal="page = false"/>
            </Transition>
</template>

<style lang="scss" scoped>
.list-mission-box{
  
  position:relative;
  max-width: 170px; 
  
  height: 200px;
  background: var(--gray-2);
  border-radius: 15px;
  border:var(--border);
  cursor: pointer;
  padding-bottom: 10px;

}
.list-mission-box-grey{
  
  position:absolute;
  top:0;
  
  opacity: 0;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border:var(--border);
  transition: all 0.4s ease-out;
  cursor: pointer;

}
.list-mission-box-grey:hover{
  
  position:absolute;
  top:0;
  
  opacity: 1;
  width: 100%;
  height: 100%;
  
  background:rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border:var(--border);
  cursor: pointer;

}


.list-mission-fixed{
  
  opacity:0;
  position: relative;

  width: 90%;
  height: 100px;
  background: white;
  border-radius: 5px;
  border:var(--border);
  
  font-weight: bold;
  color: var(--text-segondary-color);
  transition: all 0.2s ease-in-out;
  


}
.list-mission-fixed:hover{
  z-index:10;
  opacity:1;
  position: absolute;
 
  width: 80%;
  height: 100px;
  background: white;
  border-radius: 5px;
  border:var(--border);
  p{
      //color:var(--text-color);
      font-weight: 500;
    }
    h4{
      font-size:14px;
    }
}
.listmissionfixedyellow:hover{
  z-index:10;
  opacity:1;
  position: absolute;
  padding-left: 5px;
  padding-bottom: 5px;
  width: 80%;
  height: 120px;
  background: white;
  border-radius: 5px;
  outline-style:solid;
  outline-color:var(--second-1);
  p{
      //color:var(--text-color);
      font-weight: 500;
      
    }
}
.listmissionfixedgreen:hover{
  z-index:10;
  opacity:1;
  position: absolute;
  padding-left: 5px;
  padding-bottom: 5px;
  width: 80%;
  height: 120px;
  background: white;
  border-radius: 5px;
  outline-style:solid;
  outline-color:var(--fourth-1);
  
  p{
      //color:var(--text-color);
      font-weight: 500;
    }
   
}
.listmissionfixedblue:hover{
  z-index:10;
  opacity:1;
  position: absolute;
  padding-left: 5px;
  padding-bottom: 5px;
  width: 80%;
  height: 120px;
  background: white;
  border-radius: 5px;
  outline-style:solid;
  outline-color:var(--third-1);
  
  p{
      //color:var(--text-color);
      font-weight: 500;
      
    }
}
.modification {
  margin-top: 15px;
  padding-right: 5px;
  padding-top:3px;
  padding-bottom:3px;
  margin-bottom: 5px;
  width:100%;
  height: auto;
  background-color: rgba(0,0,0,0.06);
  border-radius: 5px 0 0 5px;
}
.modification p{
  font-size: 12px;
  color: black;
}

.box-white{
  height: 70%;
  width: 80%;
  background: white;
  border-radius: 5px;
  border-right: 5px solid var(--fourth-1);
}


.boxyellow{
  height: 70%;
  width: 80%;
  background: white;
  border-radius: 5px;
  border-right: 5px solid var(--second-1);
}
.boxblue{
  height: 70%;
  width: 80%;
  background: white;
  border-radius: 5px;
  border-right: 5px solid var(--third-1);
}
.boxgreen{
  height: 70%;
  width: 80%;
  background: white;
  border-radius: 5px;
  border-right: 5px solid var(--fourth-1);
}
.boxvide{
  height: 70%;
  width: 80%;
  background: white;
  border-radius: 5px;
  border-right: 5px solid var(--text-segondary-color);
}

.box-height{
height: 100%;
}
.small-box{
  margin: auto 0;
  height: 100%;
 p{
  margin: 0 auto;
 }
}
h2, h4{
  color: var(--text-segondary-color)
}
p{
    font-size: 14px;
    margin: auto;
    
  }

  .txt{
    margin: 5px 0 0 0;
   
  }
.description{
  padding-left: 10px;
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
</style>