<script setup lang="ts">
  const username: string = "Térence"
  import Nav from "./components/Nav.vue"
  import Connexion from "./views/Connexion.vue"
  import Inscription from "./views/Inscription.vue"
</script>



<template>
  <main id="main">
    <Nav/>

  <div id="firstPage">
    <h3 id="message">Vous êtes sur Medic'Help Calendar. Le calendrier numérique pour vos prises de médicaments, vos renouvellements d'ordonnances et tout et tout ;)</h3>
      <RouterView/>
    
  </div>

</main>
</template>

