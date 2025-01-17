<script setup lang="ts" defer>
    import { useRoute } from "vue-router";
    import Welcome from "../components/Welcome.vue";
    // import Test from "../components/Test.vue"
    // import { computed } from "vue";


    const route = useRoute();
    //computed()
    const isHomePage: Boolean = route.name === 'home';
    console.log("route.name : ",route.name)
    console.log("isHomePage = : ",isHomePage)

</script>

<template>
    <div id="homed">
        <!--Si j'appelle l'id "home", on dirait bien queVue confond avec le route.name car les liens ne marchent plus.-->
        <Welcome/>
        <!-- v-if=
              "isHomePage -->
        <RouterView/>
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