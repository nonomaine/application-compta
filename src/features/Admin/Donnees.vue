<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import ModalListeTachesBox from '@/components/Modal/Mission/ModalListeTachesBox.vue';
import type { ProductInterface } from '@/interfaces/Product.interface';
import data from '@/data/product';
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';

const validationSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Le champ est trop court' })
    .max(10, { message: 'Le champ est trop long' }),
});

// const validationListeners = computed(() => {
//   if (!errorMessage.value) {
//     return {
//       blur: handleChange,
//       change: handleChange,
//         fous: handleChange,
//       input: (e) => handleChange(e, false),
//     };
//   }
// });

useForm({
  validationSchema: toFormValidator(validationSchema),
  initialValues: { username: 'Test' },
});

const {
  value: usernameValue,
  errorMessage: usernameError,
  handleChange,
} = useField('username', null, { validateOnValueUpdate: false });


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
open()? 'Ajouter une Tache' : 'valider')



</script>
<template>
<div  class="modal">

        <div class="modal__inner">
          <div class="titre btn d-flex flex-row justify-content-between align-items-center">
           <h2>Contact:</h2>
              
           </div>
           <div class="mission btn d-flex flex-column justify-content-center">
                  <h3 class="p-50"> Identité: </h3>
                  <div class="input-control d-flex flex-column pb-50">
                    <div class=" input-row d-flex flex-row justify-content-between align-items-center pb-30">
                        <input type="text" placeholder="Prénom " >
                        
                        <input type="text" placeholder="Nom">
                    </div>
                    <div class=" input-row d-flex flex-row justify-content-between align-items-center pb-50">
                        <input id="plus" type="text" placeholder="Email">
                        <input @blur="handleChange" v-model="usernameValue" type="number" placeholder="Téléphone" :class="{ inputError : usernameError}">
                        <p v-if="usernameError">{{ usernameError }}</p>
                    </div>
                    
                    <!-- <h4 class>{{ state.products[0].id }}</h4>
                    <h4 class>{{ state.products[0].refmission }}</h4> -->
          </div>
          <div class="priorite">
            <h3 class="p-50">Entreprise:</h3>
            <div class="input-control d-flex flex-column justify-content-start pb-50">
                <input class="mb-30" id="plus" type="text" placeholder="Raison social">
                <input class="mb-30" id="plus" type="text" placeholder="Siren">
                <input class="mb-30" id="plus" type="text" placeholder="Siret">
                <input class="mb-30" id="plus" type="text" placeholder="Adresse">
                <div class=" input-row d-flex flex-row justify-content-between align-items-center pb-30">
                    <input type="text" placeholder="Code postale">
                    <input type="text" placeholder="Ville">
                </div>
                <input class="mb-30" id="plus" type="text" placeholder="N° TVA">
                <div class=" input-row d-flex flex-row justify-content-between pb-30">

                    <input class="mb-30" id="plus" type="text" placeholder="Régime micro-entreprise">
                    <label class="switch">
                    <input type="checkbox" checked>
                      <span class="slider round"></span>
                    </label>
                </div>
               
                <div class="select-controlwhite d-flex justify-content-start pb-20 ">
                    
                
                    <select name="entreprise">
                      <option value="Périodicité charge"> Périodicité charge </option>
                      <option value="Matinée"> Matinée </option>
                      <option value="Après midi"> Aprés-midi </option>
                      <option value="Journée">Journée  </option>

                    </select>
                  </div>
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
    padding-top: 100px;
}
 .modal__inner{
        
        max-width:60%;
        min-width:20%;
        padding:30px 32px 0px ;
        height: auto;
        margin:auto;
        background-color: white;
        border: 1px solid #f8c237;
        border-radius: 4px;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
    }

.titre.btn{
    padding-bottom: 20px;
    border-bottom: var(--border);
}

 h2, h4, h3{
        color: var(--text-segondary-color)
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


.select-controlwhite{
    width: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;

    background-color: white;
    border-radius:6px;
    padding: 0 10px;
}

.select-controlwhite select{
    min-width: 300px;
    max-width: 450px;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: #09023912 solid 2px;
    color: var( --text-segondary-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)


}

option{
    background-color: white;
    color: var(--text-segondary-color);
   
}


.validation{
  background: white;
  height: 80px;
  padding-right: 0px;
  margin-top: 50px;
  
}
.priorite{
    width: 100%;
    margin: auto;
    border-top: var(--border);
    h4{
        color: var(--text-segondary-color);
    }
}



.input-control{
    margin-left: 20px;
    display: flex;
    max-width: 800px;
    background-color: white;
    border-radius:6px;
    padding:10px 15px;
}
.input-row{
    width: 100%;
}
.input-control input{
    width: 35%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: #09023912 solid 2px;
    color: var( --text-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)
    
}
input:focus{
    
    border-color: var(--second-1);   
}


input.inputError {
  border-color: var(--primary-1);
}
.input-control input#plus{
    width: 45%;   
}



.input-control ::placeholder{
    color: #838f9f;
    font-size: 14px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--text-segondary-color);
  border-color: 1px solid #f8c237;
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1)
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: var(--second-1);
  -webkit-transition: .4s;
  transition: .4s;
  
}

input:checked + .slider {
  background-color: #f4f4f4;
  outline: 1px solid #09023912;
}

input:focus + .slider {
  //box-shadow: 0 0 1px #2196F3;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  border-color: 2px solid #f8c237;
}

input:checked + .slider:before {
  -webkit-transform: translateX(23px);
  -ms-transform: translateX(23px);
  transform: translateX(23px);
  
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


@media(max-width:1280px){
  .modal__inner{
    max-width: 70%;
  }
}
@media(max-width:1110px){
  .modal__inner{
    max-width: 75%;
  }
}
@media(max-width:980px){
  .modal__inner{
    max-width: 85%;
  }
}
@media(max-width:870px){
  .modal__inner{
    max-width: 90%;
  }
  .input-control{
    margin-left:0px;
  }
}
@media(max-width:776px){
 .input-row{
  display:flex;
  flex-direction: column-reverse !important;
  gap:30px;
  align-items: start; 
 }
 
 input{
  width:70% !important;
 }
 .switch{margin-left: 30px;}
}
@media(max-width:580px){
  .modal__inner{
    max-width: 95%;
    padding: 30px 10px  0;
  }
 .input-rowswitch{
  display:flex;
  flex-direction: column !important;
 }
 input{
  width:80% !important;
 }
}
@media(max-width:480px){
 
 input{
  width:100% !important;
 margin-left: 0;
 }
 .select-controlwhite select{
   min-width: 200px !important;
   max-width: 250px !important;
  
   
 }
}
@media(max-width:420px){
 
 input{
  width:100% !important;
  margin-left: 0;
 }
 .modal__inner{
  padding:16px 10px;
 }
 .switch{
  margin-left: 0;
 }
 .select-controlwhite{
  margin-left: 0;
  padding-left: 0;

 }
 .select-controlwhite select{
   min-width: 180px !important;
   max-width: 200px !important;
   
 }
}

</style>