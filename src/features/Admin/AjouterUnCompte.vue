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

<!-- <script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import type { ProductInterface } from '@/interfaces/Product.interface';
import data from '@/data/product';
import {useForm, useField} from 'vee-validate';

import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const state = reactive<{
  products: ProductInterface[];

}>({
  products: data,

});

const firstInput = ref<HTMLInputElement | null>(null);
onMounted(() => {
  firstInput.value?.focus();
});

const required = { required_error: 'Veuillez renseigner ce champ' };
const validationSchema = toTypedSchema(
  z.object({
    prenom: z
      .string(required)
      .min(1, { message: 'Le prenom doit faire au moins 1 caractère' })
      .max(20, { message: 'Le prenom doit faire moins de 20 caractères' }),
    email: z.string(required).email({message:'le type email est invalide'}),
    nom: z
      .string(required)
      .min(1, { message: 'Le prenom doit faire au moins 1 caractère' })
      .max(20, { message: 'Le prenom doit faire moins de 20 caractères' }),
    telephone: z
      .number(required)
      .gt(1)
      .lte(10, { message: 'le nombre maximum est de 10 caracteres'}),
     raisonsocial: z.string(required),
    siren: z.number(required)
      .min(1, { message: 'Le n° de siren est incomplet' })
      .max(13, { message: 'Le n° de siren doit faire moins de 14 caractères' }),
    siret: z.number(required),
    adresse: z.string(required),
    codepostal: z.number()
    .min(1, { message: 'Le n° de code postal contient 5 caractères' })
    .max(5, { message: 'Le n° de code postal contient 5 caractères' }),
    ville: z.string(required),
    // pays: z.string(required),
    tvaextra: z.string(required),
    //microentreprise: z.boolean(required),
    charge: z.string(required),
})
);

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
});

const prenom = useField('prenom');
const email = useField('email');
const nom = useField('nom');
const telephone = useField('telephone');
const raisonsocial = useField('raisonsocial');
const siren = useField('siren');
const siret = useField('siret');
const adresse = useField('adresse');
const codepostal = useField('codepostal');
const ville = useField('ville');
//const pays = useField('pays');
const tvaextra = useField('tvaextra');
const charge = useField('charge');

// const trySubmit = handleSubmit((formValues) => {
//   console.log(formValues);
// })
const trySubmit = handleSubmit(async (formValues, { resetForm }) => {
  try {
    await fetch('https://factures-test-api.azurewebsites.net/Clients', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    resetForm();
    firstInput.value?.focus();
  } catch (e) {
    console.log(e);
  }
});

;
// const emit = defineEmits<{
//    (e: 'closeModal'): void
// }>()

// const input = reactive({
//   value: '',
//   focus: false,
//   touched: false,
// });

// const inputOngoing = computed(() => input.focus && input.value.length);
// const inputError = computed(
//   () => !input.focus && input.touched && input.value.length < 5
// );
// const inputValid = computed(
//   () => !input.focus && input.touched && !inputError.value
// );

</script>
<template>
<div  class="modal">

        <div class="modal__inner">
          <form @submit="trySubmit">
            <div class="titre btn d-flex flex-row justify-content-between align-items-center">
            
            <h2>Contact:</h2>
               
            </div>
            <div class="mission btn d-flex flex-column justify-content-center">
                   <h3 class="p-50"> *Identité: </h3>
                   <div class="input-control d-flex flex-column pb-50">
                     <div class=" input-row d-flex flex-row justify-content-between align-items-center pb-30">

                       <div class="input-row-column d-flex flex-column">
                        <input ref="firstInput" class="mb-5" v-model="prenom.value.value" type="text" placeholder="prenom" :class="{ inputError : prenom.errorMessage.value}"/>
                         <small class="form-error pl-30" v-if="prenom.errorMessage.value">{{prenom.errorMessage.value}}</small>
                       </div>
                     
                       <div class="input-row-column d-flex flex-column">
                         <input class="mb-5" v-model ="nom.value.value" type="text" placeholder="Nom" :class="{ inputError : nom.errorMessage.value}">
                         <small class="form-error pl-30" v-if="nom.errorMessage.value">{{nom.errorMessage.value}}</small>
                       </div>
                      </div>
                     <div class=" input-row d-flex flex-row justify-content-between align-items-center pb-50">
                      
                          <div class="input-row-column d-flex flex-column">
                            <input class="mb-5" v-model ="email.value.value" id="plus1" type="email" placeholder="Email" :class="{ inputError : email.errorMessage.value}">
                            <small class="form-error pl-30" v-if="email.errorMessage.value">{{email.errorMessage.value}}</small>
                        </div>

                        <div class="input-row-column d-flex flex-column">
                            <input class="mb-5" v-model ="telephone.value.value" type="number" placeholder="Téléphone" :class="{ inputError : telephone.errorMessage.value}">
                            <small class="form-error pl-30" v-if="telephone.errorMessage.value">{{telephone.errorMessage.value}}</small>
                            </div>
                        </div>
                     
                     <!-- <h4 class>{{ state.products[0].id }}</h4>
                     <h4 class>{{ state.products[0].refmission }}</h4> -->
           </div>
           <div class="priorite">
             <h3 class="p-50">*Entreprise:</h3>
             <div class="input-control d-flex flex-column justify-content-start pb-50">
                 <div class="input-row-row pb-30 d-flex flex-column">
                   <input v-model ="raisonsocial.value.value" class="mb-5" id="plus" type="text" placeholder="Raison social" :class="{inputError: raisonsocial.errorMessage.value}">
                   <small class="form-error  pl-30" v-if="nom.errorMessage.value">{{raisonsocial.errorMessage.value}}</small>
                 </div>
                 <div class=" input-row-row pb-30 d-flex flex-column">
                 <input v-model = "siren.value.value" class="mb-5" id="plus" type="number" placeholder="Siren" :class="{ inputError : siren.errorMessage.value}">
                 <small class="form-error  pl-30" v-if="siren.errorMessage.value">{{siren.errorMessage.value}}</small>
                  </div>
                  <div class=" input-row-row pb-30 d-flex flex-column">
                    <input v-model="siret.value.value" class="mb-5" id="plus" type="number" placeholder="Siret" :class="{ inputError : siret.errorMessage.value}">
                    <small class="form-error  pl-30" v-if="siret.errorMessage.value">{{siret.errorMessage.value}}</small>
                   </div>
                   <div class=" input-row-row pb-30 d-flex flex-column">
                 <input v-model="adresse.value.value" class="mb-5" id="plus" type="text" placeholder="Adresse" :class="{ inputError : adresse.errorMessage.value}">
                 <small class="form-error  pl-30" v-if="adresse.errorMessage.value">{{adresse.errorMessage.value}}</small>
                   </div>
                 <div class=" input-row d-flex flex-row justify-content-between align-items-center pb-30">
                     
                  <div class="input-row-column d-flex flex-column">
                    <input class="pb-5" v-model="codepostal.value.value" type="number" placeholder="Code postale" :class="{ inputError : codepostal.errorMessage.value}">
                    <small class="form-error pl-30" v-if="codepostal.errorMessage.value ">{{codepostal.errorMessage.value}}</small>
                  </div>
                     
                  <div class="input-row-column d-flex flex-column">
                     <input class="pb-5" v-model="ville.value.value" type="text" placeholder="Ville" :class="{ inputError : ville.errorMessage.value}">
                     <small class="form-error pl-30" v-if="ville.errorMessage.value">{{ville.errorMessage.value}}</small>
                  </div>
                 </div>
                 <div class="input-row-row pb-30 d-flex flex-column">
                 <input v-model= "tvaextra.value.value" class="mb-5" id="plus" type="text" placeholder="N° TVA" :class="{ inputError : tvaextra.errorMessage.value}">
                 <small class="form-error pl-30 " v-if="tvaextra.errorMessage.value">{{tvaextra.errorMessage.value}}</small>
                 </div>
                 <div class=" input-row d-flex flex-row justify-content-between pb-30">
 
                     <input class="" id="plus" type="text" placeholder="Régime micro-entreprise">
                     <label class="switch">
                     <input type="checkbox" checked>
                       <span class="slider round"></span>
                     </label>
                 </div>
                
                 <div class="input-row-row select-controlwhite d-flex justify-content-start pb-20 ">
                     
                 
                     <select v-model="charge.value.value" >
                       <option value> Périodicité charge </option>
                       <option value="Matinée"> Matinée </option>
                       <option value="Après midi"> Aprés-midi </option>
                       <option value="Journée">Journée  </option>
                      </select>
                    </div>
                    <small class="form-error pb-5 pl-30" v-if="charge.errorMessage.value">{{charge.errorMessage.value}}</small>
             </div>
           
           </div>
          
            </div>
            <div class="validation d-flex flex-row align-items-center justify-content-evenly">
                   <button class="btn btn-segondary" @click="$emit('closeModal')">Annuler</button>
                   <button class="btn btn-primary " :disabled="isSubmitting">Valider</button>
                   </div>
          </form>
         
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
.input-row-column{
    width: 50%;
   height: 35px;
}
.input-row-row{
    width: 100%;
   height:65px;
}


.input-control input{
    width: 55%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: #09023912 solid 2px;
    color: var( --text-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    
}
input:focus{
    
    border-color: var(--second-1);   
}


input.inputError {
  border-color: var(--primary-1);
}


.input-control input#plus1{
    width: 90%;   
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
  border-color: 2px solid #f8c237;
}

input:focus + .slider {
  //box-shadow: 0 0 1px #2196F3;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  outline: 1px solid #09023912;
  
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

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
 
/* Chrome */
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button { 
	-webkit-appearance: none;
	margin:0;
}
 
/* Opéra*/
input::-o-inner-spin-button,
input::-o-outer-spin-button { 
	-o-appearance: none;
	margin:0
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

</style> -->