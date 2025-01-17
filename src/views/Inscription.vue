<script setup lang="ts">
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log("route.name : ",route.name)
</script>

<template>
    <div class="formPage">
        <h1>INSCRIPTION</h1>
        <p>Inscrivez-vous:</p>
        <form>
            <input type="text" placeholder="Username" name="filledUsername" required>
            <input type="text" placeholder="Password" name="filledPassword" required>
            <button type="submit">Valider</button>
        </form>
    </div>
</template>


<style>
.formPage {
  display: flex;
  flex-direction: column;
}
</style>