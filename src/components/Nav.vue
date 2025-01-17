<script setup lang="ts">
</script>

<template>
    <nav id="nav">

        <div id="menu">
                <RouterLink to="/" class="lien">Welcome</RouterLink>
                <RouterLink to="/inscription" class="lien">S'inscrire</RouterLink>
                <RouterLink to="/connexion" class="lien">Se connecter</RouterLink>



        </div>
    </nav>
</template>




<style>

#nav {
    background-color: rgb(17, 142, 180);
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 100vh;
    padding: 2;
    justify-content: center;
}

    
#menu {
    /* padding: 40vh 0 50vh 0; */
    display: flex;
    flex-direction: column;
}

.lien {
    padding: 30px;
    border: solid 1px black;
    font-size: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: underline;
}

</style>
