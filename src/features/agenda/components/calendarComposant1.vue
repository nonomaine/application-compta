<script setup lang ='ts'>
import type { ProductInterface } from '@/interfaces/Product.interface';
import {computed, ref} from'vue'
import icon from '@/src/assets/icons/plus.png';
import modalMissionBox from '@/components/Modal/Mission/Taches/ModalMissionBox.vue'
import modalPageMission from '@/components/Modal/Mission/ModalPageMission.vue'

defineProps<{
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

const box=ref(true);
const open =ref(false);

const page=ref(false);

</script>

<template>
    <div  class="list-mission-box d-flex flex-column align-items-center justify-content-center pb-10">
      <div class="list-mission-box-grey d-flex align-items-center justify-content-center " v-if="product.horaire!= ''">
           
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ product.tache.tache1.def}} </h4>
        
        <!-- <div class="list-mission-fixed d-flex flex-column justify-content-evenly pl-5"  v-else-if="product.tache.tache1.colordef === 'green'" :class="{listmissionfixedgreen: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ product.tache.tache1.def}} </h4>
        </div>
        <div class="list-mission-fixed d-flex flex-column justify-content-evenly pl-5"  v-else="product.tache.tache1.colordef === 'blue'" :class="{listmissionfixedblue: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ product.tache.tache1.def}} </h4>
        </div> --> 
        <!-- <div class="list-mission-fixed d-flex flex-column justify-content-evenly pl-5"  v-if="product.tache.tache1.colordef === 'yellow'" :class="{listmissionfixedyellow: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ product.tache.tache1.def}} </h4>
        </div>
        <div class="list-mission-fixed d-flex flex-column justify-content-evenly pl-5"  v-else-if="product.tache.tache1.colordef === 'green'" :class="{listmissionfixedgreen: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ product.tache.tache1.def}} </h4>
        </div>
        <div class="list-mission-fixed d-flex flex-column justify-content-evenly pl-5"  v-else="product.tache.tache1.colordef === 'blue'" :class="{listmissionfixedblue: box}" >
          <p class="txt">Tâche:</p>
          <h4 class="overflow-wrap">{{ product.tache.tache1.def}} </h4>
        </div> -->
        
      </div>
                <h4 class="p-10">{{ product.date }}</h4>
                <div v-if="product.color === 'yellow'" :class="{boxyellow: box}" class="box-white d-flex flex-column align-content-around">
                  <h4 class="pl-5">{{ product.refmission }}</h4>
                  <p class="pl-5">{{ product.description}}</p>
                  
                  <p class="pl-5">{{ product.horaire }}</p>
                  
                  
                </div>
                <div v-else-if="product.color === 'green'" :class="{boxgreen: box}" class="box-white d-flex flex-column align-content-around">
                  <h4 class="pl-5">{{ product.refmission }}</h4>
                  <p class="pl-5">{{ product.description }}</p>
                  
                  <p class="pl-5">{{ product.horaire }}</p>
                  
                  
                </div>
                <div v-else-if="product.color == 'bleu'" :class="{boxblue: box}" class="box-white d-flex flex-column align-content-around">
                  <h4 class="pl-5">{{ product.refmission }}</h4>
                  <p class="pl-5">{{ product.description }}</p>
                  
                  <p class="pl-5">{{ product.horaire }}</p>
                  
                  
                </div>
                <div v-else="product.color === ''" :class="{boxvide: box}" class="box-white ">
                  
          
                  
                    <div class= "box-height d-flex flex-column" v-if="product.refmission !== ''" >
                      <h4 class="pl-5">{{ product.refmission }}</h4>
                       <div class="small-box d-flex flex-column justify-content-evenly"> 

                         <p class="pl-5">{{ product.description || `ajouter taches`}}</p>
                         <div @click="open = !open" class=" d-flex justify-content-center"> <img src="@/assets/icons/ajouter-un-bouton.png " width="20" alt=""></div>
                         <p class="pl-5">{{ product.horaire || `ajouter horaires`}}</p>
                       </div>
    
                    </div>
                    <div class= "box-height d-flex flex-column" v-else>
    
                      <h4 class="pl-5">{{ product.refmission }}</h4>
                      <p class="pl-5">{{ product.description || `ajouter Mission`}}</p>
                      <div @click="page = !page" class=" d-flex justify-content-center"> <img src="@/assets/icons/ajouter-un-bouton.png " width="20" alt=""></div>
                      <p class="pl-5">{{ product.horaire || `ajouter horaires`}}</p>
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

}
.list-mission-box-grey{
  
  position:absolute;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  p, h4{
    color:var(--text-segondary-color);
    z-index:200;
    
  }
  

}


.list-mission-box-grey::after{
  
  position:absolute;
  content:"";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  opacity: 1;
  width: 80%;
  height: 100px;
  background:white;
  border: 2px solid rgb(206, 87, 87) !important;
  border-radius:5px;
  
  cursor: pointer;
  transform: scale(1.2);
  transform-origin: 50% 50%;
 

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
 
  width: 80%;
  height: 100px;
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
 
  width: 80%;
  height: 100px;
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
 
  width: 80%;
  height: 100px;
  background: white;
  border-radius: 5px;
  outline-style:solid;
  outline-color:var(--third-1);
  
  p{
      //color:var(--text-color);
      font-weight: 500;
    }
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
 .gras{
    font-weight: bold;
    text-align: center;
  }
  .txt{
    margin:0;
   
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