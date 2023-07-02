
<template>
  <div> 
    <Navbar />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import Navbar from "./components/NavBar.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
</script>
<style>
body {
  background-color: grey;
}
</style>