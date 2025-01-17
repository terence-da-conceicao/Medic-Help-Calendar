<script setup lang="ts">
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log("route.name : ",route.name)
</script>

<template>
    <div id="homed">
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

.formPage {
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  /* border : 5px solid red; */
}
</style>