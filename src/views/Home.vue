<script setup lang="ts">
    import { useRoute } from "vue-router";
    import Welcome from "../components/Welcome.vue";
    import { computed } from "vue";


    const route = useRoute();

//     Il faut utilsier soit une propriété computed (se renseigner, https://vuejs.org/guide/essentials/computed , https://vuejs.org/guide/typescript/composition-api#typing-computed )
//     ou bien une condition?

// Cette condition ci-dessous ne marche pas (<Welcome> est utilisé comme un type mais devrat être une vlaeur? Dois-je créer un type/une classe Welcome??)
//     const displayed: String = (route.name === "home") ? <Welcome/> : <RouterView/>;

Sinon : 
const isHomePage: Boolean = route.name === 'home';

</script>

<template>

 <div id="home">

    <Welcome v-if="isHomePage" />
    <!-- problème de type??? -->

      <RouterView v-else/>
      <!-- ajouter ue condition dans le template pour afficher le h3 uniquement si la route active est la page d'accueil (/).
      utiliser computed et la méthode useRoute de vue-router. -->
  </div>

</template>

<style>
#home {
    display: flex;
    flex-grow: 1;
    align-items: center;  
    justify-content: center;  
    padding: 0 5vw;
    /* l'axe principal est horinzontal (x) car main est en flex-direction: row */

    color: white;
    background: linear-gradient(0deg, #07c7e9 0%, #ffffff 100%);
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.233);
    font-size: 25px
    
}

#message {
    /* padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 40vh;
    padding-bottom: 40vh; */
    /* margin: 0px 10px 50px 10px; */
    border:1px solid red;
}
</style>