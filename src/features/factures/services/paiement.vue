

<script setup lang="ts">import { computed, ref } from 'vue';

const supprMission =ref(false);
const allo=ref('')

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
            <div class="containergreywhite d-flex flex-row">
                <div class="boxdatebig d-flex flex-row justify-content-evenly align-items-center">
                    <div class="boxdate d-flex flex-column justify-content-center ml-30">
                        <h4 class="pb-5 invisible ">mission</h4>
                      <div class="boxdatewhite d-flex flex-column justify-content-center">
                        <p>Par prélévement ou virement bancaire</p>
                        <p>Code B.I.C: </p>
                        <p>Code I.B.A.N: </p>
                      </div>
                    </div>
                </div>
                <div class="boxdatebig d-flex flex-row justify-content-evenly align-items-center">
                    <div class="boxdate d-flex flex-column justify-content-center ml-30">
                        <h4 class="pb-5">mentions légales</h4>
                      <div class="boxdatewhite"></div>
                    </div>
                </div>
                
                    
            </div>
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
    height: 200px;
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


.boxdatebig{
    width:50%;
    height:100%;
}
.boxdate{
    width:100%;
    height:100%;
    h4{
        color:var(--text-segondary-color);
    }
}

.boxdatewhite{
    width: 95%;
    height: 70%;
    font-family: var(--font-family-);
    font-size:14px;
    padding: 5px 10px;
    outline: 0;
    border: #f9f9f9 solid 2px;
    color: var( --text-segondary-color);
    border-radius: 5px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)
}


.icon{
  margin-right: 10px;
}

@media(max-width:776px){
    .containergrey{
    border-radius: 20px; 
    }
    .trash{
        display: none !important;
    }
    .containergreywhite{
        display: flex;
        flex-direction: column !important;
        justify-content: center;
    }
    .boxdatebig{
        width:100%;
        height:47%;
    }
   .invisible{
    display: none;
   }
}

@media(max-width:580px){
    .containergrey{
        min-height: 250px;
    }
    .boxdate{
        margin-left: 10px;
    }
    h4{
        padding-bottom: 0px;
    }
    .containergrey{
        width:95%;
    }
}
</style>
