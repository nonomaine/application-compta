<script setup lang="ts">
import { computed, ref } from 'vue';
import GraphiquesBatonVerticaleAnnuelle from '@/features/dashboard/graphiques/GraphiquesBatonVerticaleAnnuelle.vue'
import GraphiquesLineaires from '@/features/dashboard/graphiques/GraphiquesLineaires.vue'
// defineProps<{
//   products: ProductInterface[];
  
// }>();

const open =ref(false);

const openCloseText=computed(() => 
open ? 'Ajouter un client' : 'Fermer la modal')

</script>

<template>
  <div width="100%">

      <div class="container-espace d-flex align-items-center wrap" >
          <h2 class="m-30">Prévisionnel</h2>
      </div>
     
         <!-- fin du container button: nouvelle mission -->
     <div class="container-baro d-flex flex-row justify-content-between">
       <!-- fin du container indicateurs clés:  -->
       <div class="container-baro-left">
          <div class="container-ca d-flex flex-column ">
            <div class="intro d-flex flex-row align-items-center">
               <div class= "chips-all d-flex flex-row align-items-center justify-content-evenly p-30">
           <div class="chips-total">
             <div class="d-flex flex-column align-items-center">
               <img src="@/assets/icons/business-report.png" class="img1" width="40" alt="">
               <button class="chips btn-segondary m-30">Trimestrielle</button>
             </div>
           </div>
           <div class="chips-total">
             <div class="d-flex flex-column align-items-center">
               <img src="@/assets/icons/calendrier-annuel.png" class="img1" width="40" alt="">
               <button class="chips btn-segondary m-30">Annuelle</button>
             </div>
           </div>
         </div>
             
           </div>
           <div class="factures d-flex flex-row align-items-center ml-30">
              <h4 >Prévisionnel facturation</h4>
            </div>
            <div class="mission">
              <div class="list-mission d-flex flex-row align-items-center justify-content-center" >
                 <div class="graphiques ">
                     <GraphiquesBatonVerticaleAnnuelle />
                 </div>
              </div>
            </div>
        </div>
   </div>
       <div class="container-baro-right d-flex flex-column align-items-center justify-content-between mr-30">
          <div class="container-caright d-flex flex-column p-10 " >
           <div class="titre p-10">
            <h4>Factures réglées:</h4>
           </div>
           <div class="pt-5">

             <h6>Novembre 2022</h6>
           </div>
           <div class="resultat d-flex flex-column ">
            <div class="resultat1 d-flex flex-row justify-content-between">
              <h5>#1 Ibiss</h5>
              <h5>800,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-between">
              <h5>#4 Adequat</h5>
              <h5>200,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-end align-items-center">
              <h6>Total:</h6>
              <h5>1000,00€ HT</h5>
            </div>
           </div>
        </div>
          <div class="container-caright d-flex flex-column p-10">
            <div class="titre1 p-10">
            <h4>Factures en attentes:</h4>
           </div>
           <div class="pt-5">

             <h6>Novembre 2022</h6>
           </div>
           <div class="resultat d-flex flex-column ">
            <div class="resultat1 d-flex flex-row justify-content-between">
              <h5>#1 Ibiss</h5>
              <h5>800,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-between">
              <h5>#4 Adequat</h5>
              <h5>200,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-end align-items-center">
              <h6>Total:</h6>
              <h5>1000,00€ HT</h5>
            </div>
           </div>
        </div>
          <div class="container-caright d-flex flex-column p-10 ">
            <div class="titre2 p-10">
            <h4>Factures prévisionnelles:</h4>
           </div>
           <div class="pt-5">

             <h6>Novembre 2022</h6>
           </div>
           <div class="resultat d-flex flex-column ">
            <div class="resultat1 d-flex flex-row justify-content-between">
              <h5>#1 Ibiss</h5>
              <h5>800,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-between">
              <h5>#4 Adequat</h5>
              <h5>200,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-end align-items-center">
              <h6>Total:</h6>
              <h5>1000,00€ HT</h5>
            </div>
           </div>
        </div>
   </div>
       
          <!-- fin du container chiffres clés:  -->
      </div>
     <div class="container-baro1 d-flex flex-row justify-content-between">
       <!-- fin du container indicateurs clés:  -->
       <div class="container-baro-left" id="previsionnel">
          <div class="container-ca d-flex flex-column ">
            <div class="intro d-flex flex-row align-items-center">
               
              <h2 class="m-30"></h2>
           </div>
           <div class="factures d-flex flex-row align-items-center ml-30">
              <h4 >Prévisionnel CA</h4>
            </div>
            <div class="mission">
              <div class="list-mission d-flex flex-row align-items-center justify-content-center" >
                 <div class="graphiques ">
                     <GraphiquesLineaires />
                 </div>
              </div>
            </div>       
        </div>
   </div>
       <div class="container-baro-right d-flex flex-column align-items-center justify-content-center mr-30" id="ca">
          <div class="container-caright-total d-flex flex-column p-10">
           <div class="titre3 p-10">
            <h4>CA total:</h4>
           </div>
           <div class="pt-5">

             <h6>novembre 2022</h6>
           </div>
           <div class="resultat d-flex flex-column ">
            <div class="resultat1 d-flex flex-row justify-content-end">
              
              <h5>25000,00€ HT</h5>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-between">
              
              <h6>Limite micro-entreprise</h6>
            </div>
            <div class="resultat1 d-flex flex-row justify-content-end align-items-center">
              
              <h5 class="">+ 47600,00€ HT</h5>
            </div>
           </div>
        </div>
          
        
          
   </div>
       
          <!-- fin du container chiffres clés:  -->
      </div>
     
  </div>
    

   

</template>

<style lang="scss" scoped>


.finish{
  height: 50px;
  width: 80%;
  border-bottom: var(--border);
  margin: auto;
}
.container-espace{
  height: 200px;
  h2{
    text-decoration: underline;
    text-underline-position: under;
  }
}

.container-baro{
  width:100%;
  height:auto;
  padding-bottom: 100px;
  
}
.container-baro1{
  width:100%;
  height:auto;
   
}

.container-baro-left{
  width:60%;
}
.container-baro-right{
  width:35%;
  height: auto;
 
}
.container-ca{
  width:100%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
}
.container-caright{
  width:60%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
  max-height: 32%;
  h5{
    color: var(--text-segondary-color);
  }
  h5, h6{
    margin:0;
    padding: 5px; 
    
  }
}
.container-caright-total{
  width:60%;
  background: white;
  height: auto;
  border-radius: 30px;
  border: var(--border);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1);
  padding-bottom: 30px;
  max-height: 50%;
  h5{
    color: var(--text-segondary-color);
  }
  h5, h6{
    margin:0;
    padding: 5px; 
    
  }
}




.factures{
  width: 90%;
  border-bottom: var(--border-1);
  margin:0 auto;
}

h2, h4{
  color: var(--text-segondary-color)
}

h5{
  padding-left: 10px;
}

.graphiques{
padding-top: 30px;
 width: 70%;
}




.chips-total{
  position: relative;
  padding-top: 50px;
}



.chips-all{
  width: 80%;
 margin:0 auto;
}

.titre{
  border-bottom: 1px solid #2c5282;
}
.titre1{
  border-bottom: 1px solid #0e8ead;
}
.titre2{
  border-bottom: 1px solid #f8c237;
}
.titre3{
  border-bottom: 1px solid #ff0000db;
}

// @media screen and (max-width: 1024px) {
// /* Insérez vos propriétés CSS ici, avec vos sélecteurs*/
// .container-baro{
//   width: 100%;
//   display:flex;
//   flex-direction: column;
// }
// .container-baro-left{
//   width: 80%;
//   display: flex;
//   margin: auto;
// }

// .container-baro-right{
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   margin: auto;
//   padding-top: 50px;
// }
// .container-caright{
//   width: 30%;
// }
// }

@media screen and (max-width: 1100px) {
  .container-baro{
    width: 100%;
    height:auto;
   display:flex;
  flex-direction: column  !important;;
  justify-content: center;
  }
  .container-baro-left{
 width: 90%;
 height: auto;
  display: flex;

  margin: auto;
 }
 .container-baro-right{
 width: 100%;  
 display: flex;
 flex-direction: row !important;
 flex-wrap: wrap !important;
  margin: auto;
  padding-top: 50px;
}
.container-caright{
   width: 30%;
 }

 .container-baro-left #previsionnel{
  width: 50%;
 } 
 .container-baro-right#ca{
  width: 50%;
 
 }

}

@media (max-width:776px){
  .container-baro{
    padding-bottom: 10px;
  }
  .container-baro-right{
 width: 100%;
 margin: auto;  
 display: grid !important;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: auto;
 justify-items: center;
 
}
.container-caright{
   width: 80%; 
 }
 .container-caright{
   
    background: white;
    height: auto;
    border-radius: 30px;
    border: var(--border);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding-bottom: 30px;
    max-height: 90% !important;
}
.container-baro1{
  padding-top: 30px;
  display:flex;
  flex-direction: column !important;
}
.container-baro-right#ca {
    width: 90%;
    display: flex;

   
}
.container-caright-total {
    width: 100%;
    background: white;
    height: auto;
    border-radius: 30px;
    border: var(--border);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding-bottom: 30px;
    max-height: 90%;
    margin: auto;
}

@media(max-width:650px){
  .container-baro-right{
 width: 100%;
 margin: auto;  
 display: grid !important;
 grid-template-columns: 1fr;
 grid-template-rows: auto;
 justify-items: center;
 
}
.chips-total {
  padding-top: 10px;
  img{
    width: 30px;
  }
}
.mission .graphiques{
  width: 95%;
}
}
@media(max-width:580px){
  .container-baro-left{
    width:100%;
  }
  .chips-all{
    display: none !important;
  }

  .factures h4{
    padding-top: 15px ;
  }
  .intro{
    display:none !important;
  } 
  
}
@media(max-width:450px){
  .container-caright{
    width:100%;
  }
}
}

</style>