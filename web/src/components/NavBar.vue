<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container">
      <a class="navbar-brand" href="/">King of Bots</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link" aria-current="page" href="#">对战</a> -->
            <RouterLink to="/pk/" :class="route_path == '/pk/' ? 'nav-link active': 'nav-link'" aria-current="page">对战</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/record/" :class="route_path == '/record/' ? 'nav-link active': 'nav-link'" >对局列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/rank/" :class="route_path == '/rank/' ? 'nav-link active': 'nav-link'" >排行榜</RouterLink>
          </li>
        </ul>
        <span class="navbar-text">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MeowRain
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/user/bot/" :class="route_path == '/user/bot/' ? 'dropdown-item active': 'dropdown-item'" >我的Bot</RouterLink>
              </li>

              <li><a :class="route_path == '/user/exit' ? 'dropdown-item active': 'dropdown-item'" href="#">退出</a></li>
            </ul>
          </li>
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
// let route_name = computed(() => route.name);
let route_path = computed(()=> route.path);

</script>
<style scoped></style>