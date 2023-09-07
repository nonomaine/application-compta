<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import ModalListeTaches from './ModalListeTaches.vue';
import ModalContact2 from '@/components/Modal/Contact/ModalContact2.vue'
import type { ProductInterface } from '@/interfaces/Product.interface';
import data from '@/data/product';

const emit = defineEmits<{
   (e: 'closeModal'): void
}>()


const state = reactive<{
  products: ProductInterface[];

}>({
  products: data,

});
const selects= ref("");

var cache = {};
const metier =state.products.filter(function(elem,index,array){
  if(elem.entreprise != ''){
   return cache[elem.entreprise]?0:cache[elem.entreprise]=1;
  }
});

//const tachess= data[2].tache.tache1.def

for(var i=0; i<data.length ;i++){
//console.log(data[i].entreprise);
}

var caches={};
const taches=state.products.filter(function(elem,index,array){
  return caches[elem.id]?0:caches[elem.tache.tache1.def]=elem.tache.tache1.def;
});


//console.log(caches);

const openMission =ref(false);
const open =ref(false);

const wrong=reactive({
  ok: false,
  
});

const newClient = computed(() =>
wrong.ok ? 'fermer': 'nouveau client ') 

</script>

<template>
<div  class="modal">
    
        <div class="modal__inner">
           <div class="titre btn d-flex flex-row justify-content-between align-items-center">
               <h2>Mission</h2>  
               <button class="btn btn-segondary justify-content-end" @click="$emit('closeModal')">fermer</button>
           </div> 
           <div class="mission btn d-flex flex-column justify-content-center">
                  <h3 class="objet p-50"> Objet: <span class="pl-20"> Déclarez votre nouvelle mission</span></h3>
                <div class="input-control">
                  <input type="text" id="search" placeholder="Titre de la nouvelle mission">
                </div>
                <div class="input-control-plus d-flex flex-row justify-content-between align-items-center">
                  <div class="select-control" >
                    <select  name="entreprise" >
                      <option value="" selected> Entreprise </option>
                      <template v-for="med of metier">
                      <option> {{ med.entreprise }}</option>
                      </template>

                      
                    </select>
                  </div>
                  <button @click="wrong.ok=!wrong.ok" class="btn btn-primary d-flex flex-row align-items-center"><img class="icon" src="/src/assets/icons/plus.png " width="15"  alt=""> {{ newClient }}</button>
                </div>
                <ModalContact2 v-show="wrong.ok" @close-modal="open = false"/>
                <h3 class="use pt-100">Description</h3>
                <textarea class="mt-50 ml-30" placeholder="Description"></textarea>
                <h3 class=" use pt-100">Calendrier</h3>
                <div class="date d-flex flex-row align-items-center justify-content-between mt-30">
                  <div class="date-complete" d-flex flex-column align-items-start>
                    <label for="" class="ml-30">Début de mission</label>
                     <!-- <h4 class="ml-30">Début de mission</h4> -->
                    <input type="date" name="" id="">
                  </div>
                  <div class="date-complete" d-flex flex-column align-items-start>
                    <label for="" class="ml-30">Fin de mission</label>
                     <!-- <h4 class="ml-30">fin de mission</h4> -->
                    <input type="date" name="" id="">
                  </div>
                  
                </div>
                
                  <div class="select-controlwhite d-flex justify-content-end ">
                    <label for="" id="label">Durée journalière</label>
                    <select name="entreprise">
                      <option value="Personnalisée"> Personnalisée </option>
                      <option value="Matinée"> Matinée </option>
                      <option value="Après midi"> Aprés-midi </option>
                      <option value="Journée">Journée  </option>
                      
                    </select>
                  </div> 
                  <div class="select-controlwhite d-flex justify-content-end mb-50">
                    <label for="" id="label">Quantité</label>
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
                  <div class="taches pb-50">
                    <h3 class="p-50"> Listes des différentes taches</h3>
                    <div class="date d-flex flex-row align-items-center justify-content-between" id="date">
                     
                    <div class="select-controltaches d-flex justify-content-between">
                      <select class="select" >
                        <option value="" selected> Tâches</option>
                        <template v-for="taches of caches">
                        <option>{{taches}}</option>
                      </template>
                      </select>
                      <!-- <select class="select "  name="entreprise">
                      <option value=""> Tâches </option>
                      <option value="1"> Nettoyage Serveur </option>
                      <option value="2"> dev  </option>
                      <option value="3">3  </option>
                      <option value="4"> 4 </option>
                      <option value="5"> 5 </option>
                      <option value="6"> 6 </option>
                      <option value="7"> 7 </option>
                      <option value="8"> 8 </option>
                     </select> -->
                     <button @click="openMission =! openMission" class="btn btn-primary d-flex flex-row align-items-center"><img class="icon" src="/src/assets/icons/plus.png " width="15"  alt=""> Ajouter Tâches</button>     
                   </div> 
                </div>
                <ModalListeTaches v-show="!openMission" />
              </div>
              <h3 class=" use pt-50">Facturation</h3>
                
                <div class="select-controlwhite d-flex justify-content-end mb-50" id="controlwhite">
                    <label for="">Taux horaire</label>
                    <select name="entreprise">
                      <option value=""> 40€ </option>
                      <option value="1"> 30€ </option>
                      <option value="2"> 35€ </option>
                      <option value="3"> 45€  </option>
                      <option value="4"> 50€ </option>
                      </select>
                      
                  </div> 
                  <div class=" facturation d-flex flex-row align-items-center justify-content-end pb-50">
                   <div class="input-control">
                        <label for="">Total facturation</label>
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
        height:100%;
        background:rgba(0,0,0,0.5);
        z-index:10;
        position:absolute;
        top:0px;
        left:0;
        padding-top:30px;
        backdrop-filter: blur(2px);
        z-index:2000;
    }

    .modal__inner{
        max-width:60%;
        min-width:20%;
        padding:16px 32px 0px ;
        height: auto;
        //height:calc(100vh - 32px);
       // overflow-y: auto;
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
  
    .titre{
       padding-bottom: 80px;
       border-bottom: var(--border);
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
    border:#f9f9f9 solid 2px;
    color: var( --text-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)

}



.input-control ::placeholder{
    color: #838f9f;
    font-size: 14px;
}

.select-control{
    margin-left: 20px;
    display: flex;
    align-items: center;
    min-width: 300px;
    max-width: 450px;
    background-color: var(--gray-1);
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
.select-controlwhite{
    width: 100%;
    margin-left: 16px;
    display: flex;
    align-items: center;
   
    background-color: var(--gray-1);
    border-radius:6px;
    padding: 5px 10px;
}

.select-controlwhite select{
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
.select-controltaches{
    width: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    
    background-color: var(--gray-1);
    border-radius:6px;
    padding:10px 15px;
}

.select-controltaches select{
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
option{
    background-color: white;
    color: var(--text-segondary-color)
}

textarea{
  border-radius: 4px;
  border: var(--border);
  width: 70%;
  height: 150px;
  padding: 15px 15px;
  font-family: var(--font-family-);
  
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
.date-complete label{
  display: block;
  margin-bottom: 10px;
  color:var(--text-segondary-color);
}
 .taches{
  border-top: var(--border);
  border-bottom: var(--border);
 }
select.select{
  margin:0;
}
.facturation{
  width: 100%;
  margin-left: 16px;
}
.facturation .input-control label{
  color:var(--text-segondary-color);
  font-weight: 700;
}
.validation{
  background: white;
  height: 80px;
  padding-right: 0px;
  border-top: 1px solid var(--second-1);
  border-left: 1px solid var(--second-1);
  border-right: 1px solid var(--second-1);
}
.date-complete label{
  padding-bottom: 15px;
}
@media(max-width:1280px){
.modal__inner{
  max-width: 70%;
}
}
@media(max-width:1110px){
.modal__inner{
  max-width: 80%;
}
}
@media(max-width:980px){
.modal__inner{
  max-width: 90%;
}
}
@media(max-width:870px){
.date{
  display: flex;
  flex-direction: column !important;
  align-items:end;
  gap:10px;
}
.date-complete{
  display: flex;
  flex-direction:row;
  align-items: center;
  label{
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

}
@media(max-width:776px){
  .input-control-plus{
    display:flex;
    flex-direction: column !important;
    align-items: flex-start;
    gap:15px;
    }
    .input-control-plus .btn{
      align-self: flex-end;
      margin-top: 30px;
    }
    textarea{
      width:85%;
    }
  .select-controltaches{
    display:flex;
    flex-direction: column !important;
    align-items: flex-start;
    gap:15px;
    }
    .select-controltaches .btn{
      align-self: flex-end;
      margin-top: 30px;
    }
    .date-complete label{
      min-width: 150px;
      
    }
    .select-controlwhite #label{
      min-width: 150px;
    }
    
  
}
@media(max-width:680px){
  .modal__inner{
    padding:16px 10px 0;
  }
  .date{
    width:100%;
  }
  .date-complete{
    max-width:100%;
    flex-direction: row-reverse;
   
    
    label{
      margin-left: 0;
      order:1;
    }
  }
  .input-control-plus .btn{
      align-self: flex-start;
      margin-top: 100px;
      margin-left: 65px;
    }
}
.select-controlwhite{
  max-width: 100% !important;
 
 
 
}

.select-controltaches .btn{
      align-self: flex-start;
      margin-top: 100px;
    }
.use{
  padding-top: 50px;
}
@media(max-width:580px){
  .date{
    align-items: start;
    
  }
  .date-complete{
    display: flex;
    flex-direction: 
    column-reverse !important;
    align-items: start;
    margin-left: -8px;

    label{
      margin-left: 0px;
      margin-bottom: 10px;
      
    }
  }
  .select-controlwhite{
    display: flex;
    flex-direction: column !important;
    align-items: start;
    label{
      margin-bottom: 10px;
    }

  }
  #controlwhite{
    padding-top:20px;
  }
  .facturation{
    
    justify-content: start;
  }
  .facturation .input-control{
    display: flex;
    flex-direction: column !important;
    align-items:start;
    margin-left: 0;
    label{
      margin-bottom: 10px;
    }

    }
  }

@media(max-width:480px){
  .mission{
    padding:0;
  }
  .objet{
    padding:50px 50px 50px 10px;
  }
  .use{
    padding-left: 10px;
  }
  textarea{ 
    width:90%;
    padding-left: 10px;
    margin-left:10px;
  }
  .select-control{
    min-width:200px;
    max-width:300px;
  }
  .date input{
    min-width:200px;
    max-width:300px;
  }
  .select-controlwhite select{
    min-width:200px;
    max-width:300px;
  }
  .select-controltaches select{
    min-width:200px;
    max-width:250px;
  }
  .input-control{
    margin-left:0px;
    padding: 10px 0;
    input{
      margin-left:10px;
    }
  }
  .select-control{
    padding: 10px 0;
    margin-left:0px;
    select{
      margin-left:10px;
    }
  }
  .select-controlwhite{
    padding:5px 0;
    margin-left:10px;
  }
  .input-control-plus .btn{
    margin-left: 15px
  }
  .date-complete input{
    margin-left: 0;
  }
  .select-controlwhite select{
    margin-left: 0;
  }
  .select-controltaches{
    padding: 10px 0;
    margin-left: 0;
  }
  .date{
    padding:10px 0;
    width:90%;
    
  }
  .taches h3{
    padding: 50px 50px 50px 10px;
  }
  #date{
    margin-left:10px;
  }
  .facturation{
    margin-left:10px;
    
  }
  .facturation .input-control input{
    margin-left: 0;
  }


}
</style>