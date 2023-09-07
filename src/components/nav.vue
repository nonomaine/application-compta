<script setup lang="ts">
import type { AdminInterface } from '@/interfaces/Admin.interface';
import dataAdmin from '@/data/admin';
import {computed, reactive, ref} from 'vue'

// const yes = function changeClass():boolean{
// document.body.classList.toggle('side');
// return true;
// }

//console.log(yes)
//const sideNav1= 'side-nav1'
const admin = reactive<{
  productsAdmin: AdminInterface[];

}>({
  productsAdmin: dataAdmin,

});

const props = defineProps(
    {
        openNavigation:{
            type: Boolean,
        }
    },
    
);

const wrong=reactive({
  ok: false,
  
});

let widthMobile = screen.width

const open =ref(false);
const railWidth=ref(60)

const emit = defineEmits<{
    (e: 'changeClass', ):boolean
  }>();


//  const yes = computed((): boolean => {
// if (emit('changeClass') ) {
// return true;
// } else {
// return false;
// }
// });
//console.log(emit);


// const openCloseText=computed(() => 
// open ? 'Nouvelle Mission' : 'Fermer la modal')


 
 //console.log(yes);
 
 

</script>

    
    

        
          <!-- <nav class="side-nav" >
              <div class="container-boxlogo d-flex flex-row align-items-center justify-content-center">
                  <div class=" container-btn d-flex flex-row align-items-center justify-content-center">
                      <img class="logo-box" src="../assets/icons/LOGO-COMPTA.png" alt="" >
                  </div>
              </div>
                  <div class="nav-logo">
                      
                      <div class="logo">
                          <img src="../assets/icons/hombre.png" span class="logo-1" alt="">
                          
                      </div>  
                  </div>
      
                  <a href="#" class="block-link">
                      <img src="../assets/icons/dashboard.png" alt="" >
                      <router-link to="/dashboard"  >Dashboard</router-link> 
                  </a>
                  <div class="fill"></div>
                  <a href="#" class="block-link ">
                      <img src="../assets/icons/customer.png">
                      <router-link to="/missions">Missions</router-link> 
                      
                  </a>
                  <div class="fill"></div>
                  <a href="#" class="block-link">
                      <img src="../assets/icons/tax.png">
                      <router-link to="/factures">Factures</router-link> 
                      
                  </a>
                  <div class="fill"></div>
                  <a href="#" class="block-link">
                      <img src="../assets/icons/invoice.png">
                      <router-link to="/devis">Devis</router-link> 
                     
                  </a>
                  <div class="fill"></div>
                  <a href="#" class="block-link">
                      <img src="../assets/icons/google-calendar.png">
                      <router-link to="/agenda">Agenda</router-link> 
                     
                  </a>
              </nav> -->
          
          
<template>
  
   
      <v-navigation-drawer v-if="widthMobile>1279" class="container-nav" app
       
        :permanent="props.openNavigation"
        :rail="!props.openNavigation"
        :rail-width="railWidth"
        
       
       
      >
        <v-list id="top">
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title= "Samantha Blue"
            subtitle=""
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="comfortable" nav>
          <v-list-item class="item-nav" link to="/dashboard" prepend-icon="mdi mdi-home-minus-outline" title="" value="myfiles">Dashbaord</v-list-item>
          <v-list-item class="item-nav" link to="/missions" prepend-icon="mdi mdi-view-dashboard-outline" title="" value="Missions">Missions</v-list-item>
          <v-list-item link to="/factures" prepend-icon="mdi-account-multiple" title="" value="factures">Factures</v-list-item>
          <v-list-item link to="/devis" prepend-icon="mdi-account-multiple" title="" value="devis">Devis</v-list-item>
          <v-list-item link to="/agenda" prepend-icon="mdi mdi-calendar-end" title="" value="agenda">Agenda</v-list-item>
          <!-- <v-list-item link to="/factures" prepend-icon="mdi-star" title="" value="">Factures</v-list-item>
          <v-list-item link to="/devis" prepend-icon="mdi-star" title="" value="">Devis</v-list-item>
          <v-list-item link to="/agenda" prepend-icon="mdi-star" title="" value="">Agenda</v-list-item> -->
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer v-else="widthMobile<=1279" class="container-nav" app
       
        :permanent="props.openNavigation"
        :rail="!props.openNavigation"
        :rail-width="railWidth"
        :width="60"
        
       
       
      >
        <v-list id="top">
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title= "Samantha Blue"
            subtitle=""
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="comfortable" nav>
          <v-list-item class="item-nav" link to="/dashboard" prepend-icon="mdi mdi-home-minus-outline" title="" value="myfiles">Dashbaord</v-list-item>
          <v-list-item class="item-nav" link to="/missions" prepend-icon="mdi mdi-view-dashboard-outline" title="" value="Missions">Missions</v-list-item>
          <v-list-item link to="/factures" prepend-icon="mdi-account-multiple" title="" value="factures">Factures</v-list-item>
          <v-list-item link to="/devis" prepend-icon="mdi-account-multiple" title="" value="devis">Devis</v-list-item>
          <v-list-item link to="/agenda" prepend-icon="mdi mdi-calendar-end" title="" value="agenda">Agenda</v-list-item>
          <!-- <v-list-item link to="/factures" prepend-icon="mdi-star" title="" value="">Factures</v-list-item>
          <v-list-item link to="/devis" prepend-icon="mdi-star" title="" value="">Devis</v-list-item>
          <v-list-item link to="/agenda" prepend-icon="mdi-star" title="" value="">Agenda</v-list-item> -->
        </v-list>
      </v-navigation-drawer>

     
 
  
</template>

<style lang="scss" scoped>

.container-nav{
    //background: red;
    background: linear-gradient(to bottom, var(--primary-1), #14819c);
}


.v-list{
    background-color: transparent;
}
.v-list#top{
   border-bottom: 1px solid rgba(0,0,0,0.1)   
}
.v-divider{
    margin-top: 160px;
    display: block;
    flex: 1 1 100%;
    height: 0px;
    max-height: 0px;
    opacity: var(--v-border-opacity);
    transition: inherit;
    border-style: solid;
    border-width: 0 0 0 0;
    width: 80%;
}

.v-list-item{
    color:white;
}


.side-nav{
    position:relative; /*position fixed tjts par rapport au body*/
    display: flex; 
    flex-direction: column;
    width:100%;
    height:100%;
    //border-right:1px solid #bdbdbd;
    background: linear-gradient(to bottom, var(--primary-1), #14819c);
    color:white;
    
}
.side-nav1{
    position:relative; /*position fixed tjts par rapport au body*/
    display: flex; 
    flex-direction: column;
    width:50%;
    height:100%;
    //border-right:1px solid #bdbdbd;
    background: linear-gradient(to bottom, var(--primary-1), #14819c);
    color:white;
    
}



.container-boxlogo{
    width:100%;
    height: 90px;
}
.container-btn{
    max-height:90px;
    width: 95%;
    box-shadow: rgba(103, 102, 102, 0.25) 0px 25px 20px -20px;
}
.logo-box{
   // background-color: white;
    width: 100px;   
    cursor: pointer;
    
    
}

 .nav-logo{
    width:100%;
    height:15vh;
    margin: auto;
    display:flex;
    justify-content: center; 
    cursor: pointer;
    margin: 100px auto;
    // padding: 60px;
    // border-radius: 999px;
    // background: var(--second-1);
   
 }

 .logo{
   display: flex;
    background: var(--second-1);
    width:50%;
    height: auto;
    margin:auto;
    clip-path: circle();
    border-radius:999px;
    border: 5px solid var(--second-1)
 }
 .logo-1{
   display: flex;
    background: var(--second-1);
    width:100%;
    height: 100%;
    margin:auto;
    border-radius:999px;
    border: 1px solid var(--second-1)
 }


 .logo img{
    
    width:60%;
    margin: auto;
  

 }
.block-link{
    display:flex;
    color: white;
    text-decoration: none;
    padding: 20px 30px;
    font-weight: 500;
}

.block-link:hover{
    color:var(--second-1)
}

.block-link img {
    width:20px;
    color:white;
}

.nav-links{
    margin-left: 14px;
}

.fill{

    width:80%;
    height: 2px;
    background: rgb(57, 57, 57, 0.3);
    margin: 10px auto;
}
 a {
    margin-left: 10px;
    color: white;

 }
 a:hover {
    margin-left: 10px;
    color: var(--second-1);

 }

 a.router-link-active {
    text-decoration: underline;
    text-underline-position: under;
   
    
  }
  
  
</style>