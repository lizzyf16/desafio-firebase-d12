<template>
  <div class="singUp">
    <header>
      <h1 class="my-3">Regístrate en nuestro portal</h1>
    </header>
    <main>
      <FormRegistro/>
    </main>
  </div>
</template>

<script>
import FormRegistro from '@/components/FormRegistro.vue'
export default {
  name: 'SigUpView',
  components: {
    FormRegistro
  }
}
</script>