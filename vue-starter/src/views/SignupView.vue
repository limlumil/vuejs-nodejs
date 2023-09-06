<template>
    <div>

        <h1 class="display-6 mb-3">Signup</h1>
        <label>username</label>
        <input v-model="username" type="text" class="form-control mb-3" style="max-width:15rem"/>
        <label>password</label>
        <input v-model="password" type="password" class="form-control mb-3" style="max-width:15rem"/>
        <label>email</label>
        <input v-model="email" type="email" class="form-control mb-3" style="max-width:15rem"/>
        <button class="btn btn-primary" @click="SignUp">Sign Up</button>
    </div>

</template>
<script>
import User from "@/services/user"

export default {
    setup(){
        const userservice = new User();
        return { userservice }
    },
    data(){
        return {
            username:'',
            password:'',
            email:''
        }
    },
    methods:{
        async SignUp(){
            const singupdata = {
               username: this.username,
               password: this.password,
               email: this.email
            }

            await this.userservice.Signup(singupdata).then(result=>{
                if(result){
                    console.log(result);
                }
            })
        }
    }
}
</script>