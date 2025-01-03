<script setup lang="ts">
</script>

<template>
    <nav id="nav">

        <div id="menu">
                <div class="lien" RouterLink to="/inscription">S'inscrire</div>
                <div class="lien" RouterLink to="/connexion">Se connecter></div> 
        </div>
    </nav>
</template>




<style>

#nav {
    background-color: rgb(17, 142, 180);
    color: rgb(0, 0, 0);
    display: flex;
    /* flex-direction: column; */
    width: 80vw;
    height: 100vh;
    padding: 2em;
    font-family: Arial, Helvetica, sans-serif}

    
#menu {
    padding: 40vh 0 50vh 0;
    display: flex;
    flex-direction: column;
}

.lien {
    padding: 50px;
    border: solid 1px black;
}

</style>
