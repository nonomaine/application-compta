<script setup lang="ts">
import type { ProductInterface } from '../../../interfaces/Product.interface';
import calendarList from './calendarList.vue'
import {computed, onMounted, ref} from'vue'
import product from '@/data/product';
import modal from '@/components/Modal/Mission/ModalPageMission.vue'
import dayjs from 'dayjs'

const emit = defineEmits<{
    (e: 'changeColor', taskPriority:string[]):boolean
  }>();

const props = defineProps(
    {
        colors:{
            type:[],
        }
    }
);

const colors=['blue','green','yellow','']

const taskPriority= ref(colors);


onMounted(()=>{
    emit('changeColor',taskPriority.value)
})


</script>

<template>
  
    
            <div class="control-mission d-flex flex-column ">
              <h4>Priorité Taches</h4>
              <!-- <div class="d-flex flex-row align-items-center mt-30">
                <input @change="showAll=!showAll" class="checkbox" type="checkbox"  name="scales" >
                <label class="p-10" for="scales">Toutes</label>
              </div> -->
              <div class="chek d-flex flex-column align-items-center mt-30">
                <v-checkbox class="chekTool" @change="$emit('changeColor', taskPriority)" 
                 v-for="color in colors"
                    v-model="taskPriority" 
                    :label="color"
                    :value="color" 
                    :color="color"
                    
                    ></v-checkbox>
                    </div>
                <!-- <input @change="showGreen=!showGreen" class="checkbox checkbox-basse" type="checkbox"  name="scales" >
                <label class="p-10" for="scales">Basses</label>
              </div>
              <div class=" d-flex flex-row align-items-center mt-30">
                <input @change="showYellow=!showYellow" class="checkbox checkbox-normal"  type="checkbox"  name="scales"  >
                <label class="p-10" for="scales">Normales </label>
              </div>
              <div class=" d-flex flex-row align-items-center mt-30">
                <input @change="showBlue=!showBlue" class="checkbox checkbox-haute"  type="checkbox"  name="scales">
                <label class="p-10" for="scales">Hautes</label>
              </div>  -->
              <!-- <v-radio-group>
                <v-radio label="Radio 1" value="1"></v-radio>
                <v-radio label="Radio 2" value="2"></v-radio>
                <v-radio label="Radio 3" value="3"></v-radio>
              </v-radio-group> -->
            </div>
            
         
</template>

<style lang="scss" scoped>


.control-mission h4{
  margin: 30px auto;
}
.chek{
  width: 100%; 
}
.chekTool{
  width: 60% !important;
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

input[type="checkbox"]:checked {
  
 
  position: relative;
  &:before {
    font-family: FontAwesome ;
    content: "\f00c";
    display: block;
    color: grey;
    font-size: 13px;
    position: absolute;
  }
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
@media (max-width: 999px){
  .control-mission h4{
  margin: 30px auto;
}
.chekTool{
  width: 60% !important;
  margin-left: -40px;
}
}
@media (max-width: 776px){
  .control-mission{
    width: 100%;
    margin:auto;
    h4{
      margin: 20px auto 0 30px;
    }
  }
  .chek{
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
  }

  .chekTool{
  width: 20% !important;
  margin: auto;
}

}
@media(max-width:580px){
  .chek{
    width: 100%;
    margin:0 0 0 10px;
    display:grid !important;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50% 50%;
    align-self: center !important;
}
.chekTool{
  width:100% !important;
}
}

</style>