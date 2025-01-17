<script setup lang="ts" defer>
    import { useRoute } from "vue-router";
    import Welcome from "../components/Welcome.vue";
    import Test from "../components/Test.vue"
    import { computed } from "vue";


    const route = useRoute();

//     Il faut utilsier soit une propriété computed (se renseigner, https://vuejs.org/guide/essentials/computed , https://vuejs.org/guide/typescript/composition-api#typing-computed )
//     ou bien une condition?

// Cette condition ci-dessous ne marche pas (<Welcome> est utilisé comme un type mais devrat être une vlaeur? Dois-je créer un type/une classe Welcome??)
//     const displayed: String = (route.name === "home") ? <Welcome/> : <RouterView/>;

// Sinon : 
const isHomePage: Boolean = route.name === 'home';

</script>

<template>

 <div id="homed">
<!--Si j'appelle l'id "home", on dirait bien queVue confond avec le route.name car les liens ne marchent plus.-->

    <Welcome v-if="isHomePage" />
     <!-- <Welcome/> -->
    <!-- problème de type??? -->

      <RouterView v-else/>
      <!-- ajouter ue condition dans le template pour afficher le h3 uniquement si la route active est la page d'accueil (/).
      utiliser computed et la méthode useRoute de vue-router. -->
  </div>

</template>

 <style scoped>
#homed {
    display: flex;
    flex-grow: 1;
    align-items: center;  
    justify-content: center;  
    padding: 0 5vw;
    /* border: 5px solid red; */
    /* l'axe principal est horinzontal (x) car main est en flex-direction: row */

    color: white;
    background: linear-gradient(0deg, #07c7e9 0%, #ffffff 100%);
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.233);
    font-size: 25px;

}
</style>