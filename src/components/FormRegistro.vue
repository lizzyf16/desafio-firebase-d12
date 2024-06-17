<template>
    <div class="row justify-content-center">
        <form class="col-12 col-md-6" @submit.prevent="registro">
            <div class="form-floating mb-3">
                <input type="text" class="form-control mt-3" id="floatingInput" placeholder="name" v-model="nombre" required>
                <label for="floatingInput" class="mb-5">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control mt-3" id="floatingInput" placeholder="name@example.com" v-model="email" required>
                <label for="floatingInput" class="mb-5">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required>
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="replyPassword" class="form-control" id="floatingReplyPassword"  name="replyPassword" placeholder="Ingresa nuevamente tu Password" v-model="replyPassword" required>
                <label for="floatingPassword">Repetir Contraseña</label>
            </div>
            <div class="mb-3">
                <button class="btn btn-info">Registrar</button>
            </div>
        </form>
    </div>
</template>
<script>
import {auth, createUserWithEmailAndPassword} from '@/auth'
export default {
    name: 'FormRegistro',
    data(){
        return{
            nombre: "",
            email: "",
            password: "",
            replyPassword: "",
        }
    },
    methods:{
        async registro(){
            
            try {
                if(!this.nombre, !this.email, !this.password, !this.replyPassword){
                return alert("Debe ingresar todos los valores.");
                }
                if(this.password != this.replyPassword){
                    return alert("Los password deben coincidir, por favor verifique.")
                }
            //COMENZAMOS A REGISTRAR AL USUARIO
            const userCredentials = await createUserWithEmailAndPassword(auth, this.email, this.password);
            console.log(userCredentials);
            alert("Usuario registrado con éxito");

            } catch (error) {
                console.log(error);
                alert("Ha ocurrido un error en el proceso de registro.");
            }

        }
    }
}
</script>
<style scoped lang="scss"></style>