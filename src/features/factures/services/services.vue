

<script setup lang="ts">import { computed, ref } from 'vue';

const supprMission =ref(false);

const openTache = computed(() => 
open? 'Ajouter une Tache' : 'Valider')

</script>

<template>
   
<div class="container d-flex flex-column pt-50">
    <div  class="mission d-flex justify-content-center">
        <div class="containergrey d-flex align-items-center justify-content-center">
            <div  class="trash d-flex align-items-center justify-content-center">
                <img class="icon" src="/src/assets/icons/remove.png" width="20" alt="">
            </div>
            <div class="containergreywhite d-flex flex-row justify-content-center">
                <div class="select-controlwhite d-flex justify-content-center ">
                    <select name="entreprise">
                      <option value="Périodicité charge"> Choisir une mission </option>
                      <option value="Matinée"> Matinée </option>
                      <option value="Après midi"> Aprés-midi </option>
                      <option value="Journée">Journée  </option>
                    </select>
                  </div>
           </div>
        </div>
    </div>
    <div class="cta d-flex justify-content-center pt-50">
        <div class="cta-box">
            <button  class="btn btn-segondary d-flex align-items-center">
                <img  class="icon" src="/src/assets/icons/plus.png" width="15" alt=""> 
               Ajouter une mission
            </button>
        </div>
  </div>
  
</div>
</template>

<style lang="scss" scoped>

.container{
    width: 100%;
    height: auto;
}

.mission{
    width: 100%;
    height: auto;
    margin: auto;
}

.containergrey{
    position: relative;
    width: 90%;
    height: 150px;
    background-color: #cbd5e0;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)
}
.trash{
    position: absolute;
    left: 97%; 
   
}
.containergreywhite{
    width:92%;
    height: 100%;
    background-color: #edf2f7;  
}


.cta{
    width: 100%;
}
.cta-box{
    width: 90%;
}

.icon{
  margin-right: 10px;
}
.select-controlwhite{
    width: 100%;
    //background-color: #edf2f7;
    display: flex;
    align-items: center;
    //background-color: var(--gray-1);
    border-radius:6px;
    padding: 0 10px;
}

.select-controlwhite select{
    width: 80%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: #f9f9f9 solid 2px;
    color: var( --text-segondary-color);
    border-radius: 2px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)


}

@media(max-width:776px){
    .mission{
        justify-content: flex-start;
    }
    .containergrey{
        border-radius: 20px;
    }
    .trash{
        display:none !important;
    }
}

@media(max-width:580px){
    
    .containergrey{
        width:95%;
        margin-left: 10px;
    }
    .select-controlwhite select{
        width:90%
    }
}
@media(max-width:480px){
    .container{
        padding-top: 10px;
    }
}
</style>
