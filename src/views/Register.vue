<template>
<main class="login1">
    <section class="forms">

        <form class="register" @submit.prevent="register">
            <h2>Register</h2>
            <input type="email" placeholder="Email address" v-model="register_form.email" />
            <input type="password" placeholder="Password" v-model="register_form.password" />
            <input type="submit" value="Register" />
        </form>
<hr style="border-color:lightslategray;">
        <form class="login" @submit.prevent="login">
            <h2>Login</h2>
            <input type="email" placeholder="Email address" v-model="login_form.email" />
            <input type="password" placeholder="Password" v-model="login_form.password" />
            <input type="submit" value="Login" />
        </form>

    </section>
</main>
</template>

      
<script>
import router from '../routes';
import {
    GoogleAuthProvider,
    signInWithPopup
} from '../firebase/index';
import {
    ref
} from 'vue'
import {
    useStore
} from 'vuex'
export default {
    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        const googleSignIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    console.log(result.user);
                    router.push("/")
                })
                .catch((error) => {

                });
        }

        return {
            login_form,
            register_form,
            login,
            register
        }
    }
}
</script>

<style>
.login1{
    background-image: url(../assets/login.jpg);
}
.forms {
    display: flex;
    min-height: 100vh;
}

form {
    flex: 1 1 0%;
    padding: 8rem 1rem 1rem;
}

form.register {
    color: #FFF;
}
#login_btn a{
    color: rgb(69, 65, 65);
    text-decoration: none;
float: right;
position: absolute;
top: 6px;
right: 12px;
font-size: 23px;
border: 2px solid rgb(72, 67, 67);
padding: 8px;
}
#login_btn a:hover{
    background-color: grey;
    color: rgb(83, 80, 80);
}
#register_btn a{
    color:rgb(238, 225, 225);
    border: 1px solid rgb(42, 39, 39);
    text-decoration: none;
float: left;
position: absolute;
top: 6px;
left: 12px;
font-size: 23px;
padding: 8px;
}
#register_btn a:hover{
    background-color: white;
    color: rgb(83, 80, 80);
}

h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
}
input {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]) {
    opacity: 1;
}

input::placeholder {
    color: inherit;
}

form.register input:not([type="submit"]) {
    color: #FFF;
    border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
    background-color: lightgray;
    color: black;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}

form.register input[type="submit"] {
    background-color: lightyellow;
    color: lightgrey;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}
form.register input[type="submit"]:hover{
    color: black;
}
form.login input[type="submit"]:hover{
    color: white;
}
</style>
