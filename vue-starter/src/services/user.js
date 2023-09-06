import axios from "axios"

export default class User {
    constructor(context) {
        this.context = context
        this.token = localStorage.getItem('token');
        this.url = import.meta.env.VITE_APP_BASEURL;
    }

    async Signin(SigninData) {

        let data;

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.url}/users/signin`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: SigninData
        };

       await axios.request(config)
            .then((response) => {
                data = response.data;
            })
            .catch((error) => {
                data = { message:error.message, error: error}
            });

        return data;
    }

    async Signup(SignupData){
        let data;

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.url}/users/signup`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: SignupData
        };

       await axios.request(config)
            .then((response) => {
                data = response.data;
            })
            .catch((error) => {
                data = { message:error.message, error: error.response.data}
            });

        return data;
    }
}