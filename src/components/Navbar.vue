<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img
          src="../assets/images/pnw/LOGO-PRO.png"
          alt=""
          width="250"
          height="150"
          class="d-inline-block align-text-top"
        />     
      </a>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/resumos">Todos os Resumos</router-link>
          </a>
        </li>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/sobre">Sobre o Blog</router-link>
          </a>
        </li>
    </div>
  </nav>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Navbar",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>