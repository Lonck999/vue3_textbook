<template>
  <div class="about">
    <h2>這是關於</h2>
    <div>
      <router-view></router-view>
      <router-view name="about1"></router-view>
      <router-view name="about2"></router-view>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped>
.about {
  display: flex;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}
</style>
