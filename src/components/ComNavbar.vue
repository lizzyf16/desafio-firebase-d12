<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Control de Ususarios</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-2">
            <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item mx-2">
            <router-link to="/signup" v-if="!usuario">Sign Up</router-link>
        </li>
        <li class="nav-item mx-2">
            <router-link to="/login" v-if="!usuario">Login</router-link>
        </li>
        <li class="nav-item mx-2">
            <router-link to="/usuario" v-if="usuario">Usuario</router-link>
        </li>
        <li class="nav-item mx-2">
          <a href="" @click.prevent="logout" v-if="usuario">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import {auth, signOut} from '@/auth'
import {mapState} from 'vuex'
export default {
  name:'ComNavbar',
  computed:{
    ...mapState(['usuario'])
  },
  methods: {
    async logout(){
      try {
        await signOut(auth);
        alert("Se ha cerrado la sesión con éxito.");
        this.$router.push("/home");
      } catch (error) {
        console.log(error);
        alert("No se pudo cerrar la sesión");
      }
    }
  }
}
</script>