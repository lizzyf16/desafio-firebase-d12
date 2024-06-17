<template>
    <h2 class="my-3">Iniciar sesión</h2>
    <div class="row justify-content-center">
        <form class="col-12 col-md-6" form @submit.prevent="login">
            <div class="form-floating mb-3">
                <input type="email" class="form-control mt-3" id="floatingInput" placeholder="name@example.com"  v-model="email" required>
                <label for="floatingInput" class="mb-5">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required>
                <label for="floatingPassword">Password</label>
            </div>
            <div class="mb-3">
                <button class="btn btn-info">Iniciar sesión</button>
            </div>
        </form>
    </div>
</template>
<script>
import {auth, signInWithEmailAndPassword} from '@/auth'
export default{
    name: "FormLogin",
    data(){
        return{
            email: "",
            password: "",
        }
    },
    methods:{
       async login(){
        try {
            let usuario = await signInWithEmailAndPassword(auth, this.email, this.password)
            console.log(usuario);
            alert("Ususario autentificado con éxito");
            this.$router.push("/usuario");    
        } catch (error) {
            console.log(error)
            alert("A ocurrido un error de inicio de Sesión")
        }
       }
    }
}
</script>
