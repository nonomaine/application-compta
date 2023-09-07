<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import ModalListeTachesBox from '@/components/Modal/Mission/ModalListeTachesBox.vue';
import type { ProductInterface } from '@/interfaces/Product.interface';
import type { AdminInterface } from '@/interfaces/Admin.interface';
import data from '@/data/product';
import dataAdmin from '@/data/admin';


const state = reactive<{
  products: ProductInterface[];

}>({
  products: data,

});
const admin = reactive<{
  productsAdmin: AdminInterface[];

}>({
  productsAdmin: dataAdmin,

});

const emit = defineEmits<{
   (e: 'closeModal'): void
}>()

const wrong=reactive({
  ok: false,
  
});
const wron=reactive({
  ok: false,
  
});
 const isActive=reactive({
  ok: true,
 });
  

const box=(true);


const darkMode = computed(() =>
wrong.ok ? 'mode sombre' : 'mode clair  ') 

// const a = document.querySelector('.boxb4'); 
//  const b = console.log('allo');

//  const darkM = computed(() =>
//  isActive.ok ? b : a.classList.toggle('.boxb4.active')
//  ) 

// const boxe =document.querySelector('.boxb4');

// const boxes=boxe.addEventListener('click', e => {
//         boxe.classList.toggle('active');
//     }) 


</script>
<template>
<div  class="modal" @click.self="$emit('closeModal')" >
  <div class="modal-inner">

    <div class="modal__inner">
      <div class="titre btn d-flex flex-row justify-content-between align-items-center" >
           <h2>Admin:</h2>
           
           <button class="boxb4 b4" @mouseenter="isActive.ok=!isActive.ok" @mouseleave="isActive.ok=!isActive.ok" :class="{active: !isActive.ok}" @click="$emit('closeModal')">
             <div class="container-lignes">
              <div class="ligne"></div>
              <div class="ligne"></div>
             </div>
           </button>
       </div>
       <div class="identite">
           <h5 >{{ admin.productsAdmin[0].identite.nom }} {{ admin.productsAdmin[0].identite.prenom }}</h5>
           <h5 >{{ admin.productsAdmin[0].entreprise.raisonSociale }}</h5>
       </div>
        <div class="mission d-flex flex-column justify-content-center pt-50">
          <a href="#" class="block-link d-flex align-items-end" @click="$emit('closeModal')">
                  <img src="@/assets/icons/skills (1).png" alt="" >
                  <router-link to="/admin/données">Vos Données</router-link> 
          </a>
          <a href="#" class="block-link d-flex align-items-end" @click="$emit('closeModal')" >
                  <img src="@/assets/icons/add-user (1).png" alt="" >
                  <router-link to="/admin/nouveau">Ajouter un compte</router-link> 
          </a>
        
     </div>
       
     
    </div>
    <div class="validation d-flex flex-row align-items-center justify-content-end " >
      <div class="mode-clair d-flex flex-row align-items-center">
        <img src="@/assets/icons/lune.png" alt="" >
        <p class="pl-10 pr-30" >{{ darkMode }}</p>
      </div>
      
      <label class="switch mr-30"  >
                    <input  class ="allo" type="checkbox" @click="wrong.ok =! wrong.ok" >
                      <span class="slider round" ></span>
                    </label>
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
        //position:fixed;
        top:0;
        left:0;
        padding-top:10px;
        backdrop-filter: blur(2px);
        z-index: 2000;
    }
.modal-inner{
        max-width:500px;
        min-width:400px;
        position: absolute;
        top:0.5vh;
        right:0.5vh;
        height: auto;
        //height:calc(100vh - 32px);
        //overflow-y: auto;
        margin:auto;
        background: var(--gray-1);
        border-radius: 4px;
        //transform: translateY(0%);
        animation-name: translate;
        animation-duration: 0.6s;
        
}
 .modal__inner{
     padding:16px 32px 0px ;    
    }

    @keyframes translate{
        0% {transform: translateY(-220%);}
        100% {transform: translateY(0%);}
    }

.titre.btn{
    padding-bottom: 10px;
   }

 h2, h4, h3{
        color: var(--text-segondary-color)
    }
h5{
  margin: 0;
  padding: 5px 15px
}

h3{
  padding-left: 30px;
}

img{
  width: 20px;
  color: white;
}
.block-link{
    display:flex;
    color: white;
    padding: 15px 30px;
    font-weight: 500;
    a{
      color: var(--text-segondary-color);
      font-weight: 600;
      margin-left: 14px;
      font-size:14px;
      
    }
    & a:hover{
      color:var(--second-1);
    }
}

.block-link:hover{
    color:var(--second-1)
}

.block-link img {
    width:20px;
    
}
a.router-link {
    text-decoration:none;
     
  }
a.router-link-active {
    text-decoration: underline;
    text-underline-position: under;  
  }


.identite{
  border-bottom: var(--border);
  padding-bottom: 5px;
}

.validation{
  background: white;
  border-radius: 0px 0px 4px 4px;
  height: 80px;
  padding: 0px;
  margin-top: 50px;
  border-top: 1px solid var(--second-1);
  border-left: 1px solid var(--second-1);
  border-right: 1px solid var(--second-1);
  img{
    transform: rotate(40deg)
  }
  p{
    min-width: 160px;
  }
}
.validationdark{
  background: rgb(16, 2, 2);
  border-radius: 0px 0px 4px 4px;
  height: 80px;
  padding: 0px;
  margin-top: 50px;
  border-top: 1px solid var(--second-1);
  border-left: 1px solid var(--second-1);
  border-right: 1px solid var(--second-1);
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
  //background-color: var(--text-segondary-color);
  //border-color: 1px solid #f8c237;
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
  background-color: var(--text-segondary-color);
  border-color: 2px solid #f8c237;
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

.boxb4 {
  margin: 10px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.boxb4 .container-lignes {
  // background: gray;  
  width: 25px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.boxb4 .ligne{
  /* background: gray; */
  width: 25px;
  height: 3px;
  position: absolute;
  
  border-radius:10px;
  background-color: var(--text-segondary-color);
}

.boxb4 .ligne:nth-child(1){
  top: 6px;
  
  rotate:45deg;
}
.boxb4 .ligne:nth-child(2){
  top: 6px;
  rotate:-45deg;
}

.boxb4.active{
  transition:outline 0.6s 0.2s ease-in-out;
  outline: 1px solid var(--second-1);
}

.b4 .ligne:nth-child(1), .ligne:nth-child(2){
  transform: scale(1);
  transition:   
  transform 0.2s ease-in-out,
  top 0.2s 0.2s ease-in-out;
}
.b4.active .ligne:nth-child(1){
  top: 6px;
  transform: scaleX(1.2);
  transition:   
  top 0.2s  ease-in-out,
  transform 0.2s 0.2s ease-in-out;
} 

 .b4.active .ligne:nth-child(2){
  top: 6px;
  transform: scaleX(1.2);
  transition:   
  top 0.2s  ease-in-out,
  transform 0.2s 0.2s ease-in-out;
}

.mode-clair{
  width:250px;
  padding-left: 0;
}
@media(max-width:420px) {
  .modal-inner{
    min-width: 300px !important;
    max-width:90% !important;
  }
  .mode-clair{
  width:200px;
}
}
</style>