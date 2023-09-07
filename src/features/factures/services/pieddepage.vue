

<script setup lang="ts">
import type { AdminInterface } from '@/interfaces/Admin.interface';
import dataAdmin from '@/data/admin';
import { computed, reactive, ref } from 'vue';

const admin = reactive<{
  productsAdmin: AdminInterface[];

}>({
  productsAdmin: dataAdmin,

});
const supprMission =ref(false);
const allo=ref('')

const openTache = computed(() => 
open? 'Ajouter une Tache' : 'Valider')

</script>

<template>
   
<div class="container d-flex flex-column align-items-center pt-50">
    <p class="pl-5 pr-5"><strong>{{ admin.productsAdmin[0].entreprise.raisonSociale}}-SARL </strong>au capital de <strong>3000€
    </strong></p>
    <p class="pl-5 pr-5"> N° Siret : <strong>{{  admin.productsAdmin[0].entreprise.siret }}</strong> - R.C.S <strong>Lyon 123 456 789</strong> - Code APE : <strong>1234A</strong> - TVA intracommuntaire : <strong>{{ admin.productsAdmin[0].entreprise.tvaextra }}</strong> </p>
    
</div>
</template>

<style lang="scss" scoped>

.container{
    width: 100%;
    height: auto;
    text-align: center;
    p{
        color: var(--text-segondary-color);
        font-size: 16px;
    }
}

</style>
