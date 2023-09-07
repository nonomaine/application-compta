

<script setup lang="ts">import { computed, ref } from 'vue';

const supprMission =ref(false);

</script>

<template>
   
<div class="container d-flex flex-column pt-50">
    <div  class="mission d-flex justify-content-center">
        <div class="containergrey d-flex align-items-center justify-content-center">
            <div  class="trash d-flex align-items-center justify-content-center">
                <img class="icon" src="/src/assets/icons/remove.png" width="20" alt="">
            </div>
            <div class="containergreywhite d-flex flex-row">
               <div class="boxarea d-flex align-items-center">
            
                <textarea class="ml-10" placeholder="Description"></textarea>
               </div>
               <div class="boxdate d-flex flex-column justify-content-evenly">
                
                <input class="datetime mr-20" type="date" id="search" placeholder="Recherche">

                <input class="datetime mr-20" type="date" id="search" placeholder="Recherche">
               </div>
                
            </div>
        </div>
    </div>
    <div class="priorite pt-30">
        <h4>Priorité</h4>
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
  <div class="cta d-flex justify-content-end pt-30">
    <button  class="btn btn-segondary d-flex align-items-center">
        <img  class="icon" src="/src/assets/icons/plus.png" width="15" alt=""> 
        Ajouter une ligne de Tâches
    </button>

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
.boxarea{
    width:70%;
}
textarea{
    width: 80%;
    height: 60%;
    border-radius: 4px;
    border: var(--border);
    
    padding: 15px 15px;
    font-family: var(--font-family-);
    color: var(--text-segondary-color);
}
.boxdate{
    width:30%;
}
input.datetime{
    width: 60%;
    padding: 5px 5px;
    margin: auto;
    border-radius: 4px;
    border: var(--border);
    font-family: var(--font-family-);
    color: (--text-segondary-color),
}
.priorite{
    width: 82.8%;
    margin: auto;
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
}

.icon{
  margin-right: 10px;
}
@media(max-width:1080px){
    input.datetime{
        width:70% ;
    }
}
@media(max-width:776px){
    .containergrey{
        width:100%;
        border-radius: 20px;
    }
    input.datetime{
        width:80% ;
    }
    .trash{
        display:none !important;
    }
}
@media(max-width:580px){
    textarea{
        margin-left:20px !important;
    }
    .boxdate{
        width:40%;
    }
}
@media(max-width:480px){
    .containergreywhite{
         display: flex;
       flex-direction: column !important;
     }
     .boxarea{
        width:90%;
        height:50%  
     }
     .boxarea textarea{
        margin-top: 10px;
        padding-top: 10px;
        width: 100%;
        height: 100%;  
     }
     .boxdate{
        width:100%;
        height:45%;
        display: flex;
        flex-direction: row !important;
        align-items: center;
     }
     input.datetime{
        width:40% ;
    }
}
</style>