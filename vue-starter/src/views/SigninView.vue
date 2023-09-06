<template>
    <div class="flex flex-column justify-item-center ">
        <h1 class="display-6">Wecome to Imauice starter project </h1>
        <p>please signin to look around this template</p>
        <h3 class="mb-3">Sign In</h3>
        <input v-model="username" type="text" style="max-width:15rem" class="form-control mb-2" placeholder="Username"/>
        <input v-model="password" type="password" style="max-width:15rem" class="form-control" placeholder="Password"/>
        <button class="btn btn-primary my-3" @click="SignIn">Signin</button>
        <span class="mx-2" @click="$router.push('/signup')">signup</span>
        </div>
</template>
<script>
import User from "@/services/user";

export default {
setup(){
    const userservice = new User();
    return { userservice }
},
data(){
    return {
        username:"",
        password:""
    }
},
methods:{
    async SignIn(){

        const logindata = {
            username:this.username,
            password:this.password
        }

        await this.userservice.Signin(logindata).then(result => {
            if(result){
                console.log(result);
                this.$router.push('/profile');
            }
        })
    }
}

}
</script>
<style scoped>

</style>