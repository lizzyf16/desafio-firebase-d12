<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Control de Ususarios</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-2">
            <router-link to="/" v-if="!usuario">Home</router-link>
        </li>
        <li class="nav-item mx-2" v-if="!usuario">
            <router-link to="/signup">Sign Up</router-link>
        </li>
        <li class="nav-item mx-2" v-if="!usuario">
            <router-link to="/login" >Login</router-link>
        </li>
        <li class="nav-item mx-2" v-if="usuario">
            <router-link to="/usuario">Usuario</router-link>
        </li>
        <li class="nav-item mx-2" v-if="usuario">
          <a href="" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>    <router-view/>
</div>
</template>
<script>
import {auth, signOut} from '@/auth'
import {mapState} from 'vuex'
export default {
  name:'app',
  components: {
  },
  computed:{
    ...mapState(['usuario'])
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        alert("Sesión cerrada con éxito");
        this.$router.push("/"); 
      } catch (error) {
        console.log(error)
        alert("Error al cerrar sesión")
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
