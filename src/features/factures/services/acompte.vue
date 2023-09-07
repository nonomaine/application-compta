

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
                <div class="boxdatebig-col d-flex flex-column ml-30">
                    <h4>Mission</h4>
                <div class="input-control d-flex flex-column justify-content-center">
                    <input type="text">
                </div>
                </div>
                </div>

               <div class="boxdate d-flex flex-row justify-content-evenly align-items-center">
                <div class="boxdate-col d-flex flex-column">
                    <h4 class="pr-10">Montant à déduire</h4>
                    <input class="datetime" type="text" id="search" placeholder="Montant">
                </div>
                <div class="boxdate-col d-flex flex-column">
                    <h4 class="pr-5">Pourcentage à déduire</h4>
                    <select class="datetime" >
                        <option value="">% </option>
                        <option value="">5%</option>
                        <option value="">10%</option>
                        <option value="">15%</option>
                        <option value="">20%</option>
                    </select>
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
.input-control{
    width:80%;
    height: 100%;
}
input{
    
    
    width: 90%;
    
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

.boxdatebig{
    width:60%;
}
.boxdatebig-col{
    width:100%;
    height: 60%;
    h4{
        color:var(--text-segondary-color);
    }
}
.boxdate{
    width:40%;
}
.boxdate-col{
    width:100%;
    height: 60%;
    h4{
        color:var(--text-segondary-color);
    }
}
.datetime{
    width: 80%;
    margin: auto 0;
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

.icon{
  margin-right: 10px;
}

@media(max-width:1670px){
    .boxdate-col{
        position: relative;
    }
    .datetime{
        position: absolute;
        top:60px;
    }
}


@media(max-width:1080px){
    .datetime{
        position: absolute;
        top:80px;
    }
    
}
@media(max-width:870px){
    .containergreywhite{
        display:flex;
        flex-direction: column !important;
    }
    .boxdatebig{
    width: 80%;
    height: 50%;
    }
    .boxdate{
        
        width:100%;
        height:50%;      
    }

   
    .boxdate-col{
        width:45%;
        display:flex;
        flex-direction: column;
    }
    .datetime{
        position: relative; 
        top:0; 
        padding-bottom: 5px;
    }
   
}

@media(max-width:776px){
    
    .containergrey{
    border-radius: 20px; 
    }
    .boxdatebig-col{
    width: 100%;
    margin-left: 10px;
    }
   
    .boxdate{
        margin-left: 10px;
    }
    .boxdate-col{
        width:50%;
        display:flex;
        flex-direction: column;
    }
    .trash{
        display:none !important;
    }
}

@media(max-width:580px){
   
    .containergrey{
        width:95%;
    }
    .boxdate-col{
        height:100%;
    }
    
}
@media(max-width:480px){
    .boxdatebig{
    width: 100%;
    height: 45%;
    }
    .input-control{
        width:100%;
    }
    .boxdate{
        display:flex;
        flex-direction:column !important;
    }
    .boxdate-col{
        width:90%;
    }
    .containergrey{
        min-height: 250px;
    }
    textarea{
        width:90%;
    }
}

</style>
