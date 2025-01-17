<script setup lang="ts">
import Test from "../components/Test.vue";
</script>

<template>
        <div id="message">
        <h3 id="message" class="cormorant-garamond-semibold" >Vous êtes sur Medic'Help Calendar. Le calendrier numérique pour vos prises de médicaments, vos renouvellements d'ordonnances et tout ce qu'il vous faut ;)</h3>
         <!-- <Test/> -->
        </div>
</template>

<style scoped>
#message {
    /* padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 40vh;
    padding-bottom: 40vh;
    margin: 0px 10px 50px 10px; */
    /*je met un background tranparent parce que je n'ai aps réussi à retirer l'heritage de style du parent (Home) vers l'enfant (Welcome) */
}
</style>