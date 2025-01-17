<script setup lang="ts">
  import Home from "./views/Home.vue"
  import Nav from "./components/Nav.vue"
  // import Connexion from "./views/Connexion.vue"
  // import Inscription from "./views/Inscription.vue"
</script>



<template>
<main id="main">
    <Nav/>
    <Home/>
</main>
</template>
<style>
#main {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    overflow-block:auto;

}</style>

