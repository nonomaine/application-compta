<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import ModalListeTachesBox from '../ModalListeTachesBox.vue';
import type { ProductInterface } from '@/interfaces/Product.interface';
import data from '@/data/product';


const state = reactive<{
  products: ProductInterface[];

}>({
  products: data,

});



const emit = defineEmits<{
   (e: 'closeModal'): void
}>()

const openMission =ref(false);

const openTache = computed(() =>
open()? 'Ajouter une Tache' : 'Valider')



</script>
<template>
<div  class="modal">

        <div class="modal__inner">
          <div class="titre btn d-flex flex-row justify-content-end align-items-center">

               <button class="btn btn-segondary justify-content-end" @click="$emit('closeModal')">Fermer</button>
           </div>
           <div class="mission btn d-flex flex-column justify-content-center">
                  <h3 class="p-50"> Mission sélectionnée: </h3>
                  <div class="mission-control d-flex flex-column">
                    <h4 class>{{ state.products[0].id }}</h4>
                    <h4 class>{{ state.products[0].refmission }}</h4>
          </div>
          <div class="priorite">
            <h3 class="p-50">Tâches:</h3>
            <h4 class="pl-30 pb-50">Priorité</h4>
            <div class="select-controlwhite d-flex justify-content-start mb-50">

                          <select name="entreprise">
                          <option value=""> liste des taches </option>
                          <option value="1"> 30€ </option>
                          <option value="2"> 35€ </option>
                          <option value="3"> 45€  </option>
                          <option value="4"> 50€ </option>
                          </select>
          </div>
          <div class="taches d-flex flex-row justify-content-evenly align-items-center pt-20">
            <div class="d-flex flex-column align-items-center justify-content-center">
            <label class="p-10" for="scales">Basses</label>
            <input  class="checkbox-basse" type="checkbox"  name="scales" >
            </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <label class="p-10" for="scales">Normales</label>
            <input  class="checkbox-normal" type="checkbox"  name="scales" >
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <label class="p-10" for="scales">Hautes</label>
            <input  class="checkbox-haute" type="checkbox"  name="scales" >
          </div>
          </div>
          </div>
          <ModalListeTachesBox v-show="openMission"/>
            <div class="cta d-flex justify-content-end pb-50">
              <button @click="openMission =! openMission" class="btn btn-segondary d-flex align-items-center">
               <img class="icon" src="/src/assets/icons/plus.png" width="15" alt="">
                   {{openTache}}
              </button>
            </div>
                  <h3 class="pt-50 pb-20">Calendrier</h3>
                <div class="date d-flex flex-row align-items-center justify-content-between mt-30">
                  <input type="date" name="" id="">
                  <input type="date" name="" id="" class="pb-50">
                </div>

                  <div class="select-controlwhite d-flex justify-content-end pb-20 ">
                    <label for="">Durée journalière</label>
                    <select name="entreprise">
                      <option value="Personnalisée"> Personnalisée </option>
                      <option value="Matinée"> Matinée </option>
                      <option value="Après midi"> Aprés-midi </option>
                      <option value="Journée">Journée  </option>

                    </select>
                  </div>
                  <div class="select-controlwhite d-flex justify-content-end pb-20">
                    <label for="">Quantité</label>
                    <select name="entreprise">
                      <option value=""> Quantité </option>
                      <option value="1"> 1 </option>
                      <option value="2"> 2 </option>
                      <option value="3">3  </option>
                      <option value="4"> 4 </option>
                      <option value="5"> 5 </option>
                      <option value="6"> 6 </option>
                      <option value="7"> 7 </option>
                      <option value="8"> 8 </option>
                    </select>
                  </div>
                  <div class="select-controlwhite d-flex justify-content-end pb-20">
                    <label for="">Taux horaire</label>
                    <select name="entreprise">
                      <option value=""> 40€ </option>
                      <option value="1"> 30€ </option>
                      <option value="2"> 35€ </option>
                      <option value="3"> 45€  </option>
                      <option value="4"> 50€ </option>
                      </select>

                  </div>
                  <div class=" select-controlwhite d-flex flex-row align-items-center justify-content-end pb-50">
                   <div class="input-control">
                        <label for="">Estimation</label>
                      <input type="text">
                    </div>
                  </div>




           </div>
           <div class="validation d-flex flex-row align-items-center justify-content-evenly">
                  <button class="btn btn-segondary" @click="$emit('closeModal')">Annuler</button>
                  <button class="btn btn-primary ">Valider</button>
                  </div>
        </div>

</div>
</template>

<style lang="scss" scoped>

.modal{
        width:100%;
        height:1440px;
        background:rgba(0,0,0,0.5);
        z-index:1010;
        position:absolute;
        top:0;
        left:0;
        padding-top:30px;
        backdrop-filter: blur(2px);
    }

    .modal__inner{
        max-width:60%;
        min-width:20%;
        padding:16px 32px 0px ;
        height:calc(100vh - 32px);
        overflow-y: auto;
        margin:auto;
        background: var(--gray-1);
        border-radius: 4px;
    }

    h2, h4, h3{
        color: var(--text-segondary-color)
    }
    .icon{
  margin-right: 10px;
}



h3{
  padding-left: 30px;
}
span{
    font-size: 16px;
}
input{
  margin-left: 30px;

}
select{
  margin-left: 30px;

}


.mission-control{
    margin-left: 20px;
    display: flex;
    align-items: center;
    max-width: 250px;
    background-color: var(--gray-1);
    border-radius:6px;
    padding:10px 15px 50px 15px;
    h4{
    width: 100%;
    font-family: var(--font-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: var( --second-1) solid 2px;
    color: var( --text-segondary-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin: 10px 0;
    }
}

.select-controlwhite{
    width: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;

    background-color: var(--gray-1);
    border-radius:6px;
    padding: 20px 10px;
}

.select-controlwhite select{
    min-width: 300px;
    max-width: 450px;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border:var(--second-1) solid 2px;
    color: var( --text-segondary-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)


}

option{
    background-color: white;
    color: var(--text-segondary-color);
   
}

textarea{
  border-radius: 4px;
  border: var(--border);
  width: 70%;
  height: 150px;
  padding: 15px 15px;
  font-family: var(--font-family-);

}

 .taches{
  padding-bottom: 50px;

 }

.validation{
  background: white;
  height: 80px;
  padding-right: 0px;
  margin-top: 100px;
  border-top: 1px solid var(--second-1);
  border-left: 1px solid var(--second-1);
  border-right: 1px solid var(--second-1);
}
.priorite{
    width: 100%;
    margin: auto;
    border-top: var(--border);
    h4{
        color: var(--text-segondary-color);
    }
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


input[type=checkbox].checkbox-basse{
  border: 2px solid var(--fourth-1);
}
input[type=checkbox].checkbox-normal{
  border: 2px solid var(--second-1);
}
input[type=checkbox].checkbox-haute{
  border: 2px solid var(--third-1);
}
.cta{
    width: 100%;
    border-bottom: var(--border);
}

.icon{
  margin-right: 10px;
}
.date {
    margin-left: 20px;
    width: 100%;

    background-color: var(--gray-1);
    border-radius:6px;
    padding:10px 15px;
}
.date input {
    min-width: 300px;
    max-width: 450px;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border:#f9f9f9 solid 2px;
    color: var( --text-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)
}
.input-control{
    margin-left: 20px;
    display: flex;
    align-items: center;
    max-width: 450px;
    background-color: var(--gray-1);
    border-radius:6px;
    padding:10px 15px;
}

.input-control input{
    width: 100%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: var(--second-1) solid 2px;
    color: var( --text-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)

}



.input-control ::placeholder{
    color: #838f9f;
    font-size: 14px;
}

</style>