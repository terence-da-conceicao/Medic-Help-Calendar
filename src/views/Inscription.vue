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
<script setup lang="ts">

</script>
<style>
.formPage {
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  /* border : 5px solid red; */
}
</style>