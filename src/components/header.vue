<script setup lang="ts">
 import{computed, ref} from 'vue'
 import modalAdmin from '@/components/Modal/Admin/ModalAdmin.vue'
import { onMounted } from 'vue';
  const bbn = ref(false);
 

  const emit = defineEmits<{
   (e: 'changeClass'): boolean
 }>();

 const open=ref(false);
 const rotate=ref(false);

 const openCloseText=computed(() => 
open ? 'Nouvelle Mission' : 'Fermer la modal')

let widthMobile = screen.width
let newWidthMobile=ref(widthMobile)
console.log(newWidthMobile.value)
const wD= computed(()=>{
  return newWidthMobile.value
})
</script>

<template>
   <v-app-bar app>
     <div class="header-box px-20 d-flex flex-row align-items-center justify-content-between">
       <div class="input d-flex flex-row flex-fill align-items-center " >
     
           <a href="#" class="block-header d-flex flex-row  ml-5" @click="$emit('changeClass')">
             <div class="d-flex" @click="rotate=!rotate" v-bind:class="{boxImg: rotate}">
   
               <img src="../assets/icons/collapse.png" id="img1" alt=""  > 
             </div>
             
             <h3 v-if="wD > 580" >{{ $route.name }}</h3>
           </a>
     
         <div class="input-control">
                 <label for="search">
                     <img src="../assets/icons/search.svg" alt="" >
                 </label>
                 <input type="text" id="search" placeholder="Recherche">
         </div>
       </div>
       <div class="date-control d-flex flex-row align-items-center justify-content-end mr-50">
          <input class="date mr-20" type="month" id="search"  >
          <div class="admin d-flex align-items-center">
            <h4 >Admin </h4>
            <img @click="open = !open" class ="ml-20" src="../assets/icons/settings.png" alt="" >

          </div>
       </div>
                 
     </div>
     
    </v-app-bar>
    <Transition  appear name="fade">
    <modalAdmin v-show="open"  @close-modal="open = false"/>
    </Transition>
<div>
</div>
</template>

<style lang="scss" scoped>
.header-box{
    height: 100%;
    width:100%;
    background: linear-gradient(to right, var(--primary-3), var(--primary-4)) 
}

a{
  color: white;
}
.input{
  justify-content: flex-start;
  height:100%;
  
}
img{
  max-width:25px;
}
// #img1{
//   width:25px !important;
// }
 h3{
  padding-left: 30px;
  color:white;
}
 h4{
  padding-left: 30px;
  color:white;
  cursor: pointer;
}
input{
  margin-left: 30px;
  
  
}
.input{
  max-width: 60%;
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

.input-control img{
    width: 25px;
    position: relative;
    top: 2px;
    padding: 0 2px;
    
    
}
.input-control input{
    width: 100%;
    font-family: var(--font-family-);
    font-size:14px;
    padding-left: 10px;
    outline: 0;
    border:#f9f9f9 solid 2px;
    color: var( --text-color);
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1)

}

.input-control ::placeholder{
    color: #838f9f;
    font-size: 14px;
}

.date-control{
 max-width: 40%;

}
 .date{
   
    font-size:16px;
    padding: 2px 5px 2px 10px;
    border-radius: 4px;
    border:#f9f9f9 solid 2px;
    color: var( --text-color);
    font-size: 14px;
    font-family: var(--font-family-);
    background-color: #f4f4f4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    
 }
 .date:focus{
   
    outline-color: #0f8dac;
 
 }
 

 .boxImg{
  transform:rotate(-180deg);
  
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

@media (max-width:1024px){
.admin h4{
  display: none;
}
}
@media (max-width:776px){
  .input{
    max-width: 85%;
  }
.date{
  display: none;
}
}

@media(max-width:580px){
  .date-control{
    margin-right: 20px;
}

}
</style>