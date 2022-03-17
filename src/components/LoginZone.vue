<template>
  <v-layout row wrap justify-center class="text-center">
    <v-flex xs6>
      <div class="mb-5">
        <h1 class="mb-5">Login</h1>
        <p>Username : <input type="text" required v-model="email" /></p>
        <p>Password : <input type="password" required v-model="password" /></p>
        <v-btn @click="login()">Login</v-btn>
        <v-btn @click="googlelogin()">Google Login</v-btn>
        <v-btn @click="register()">Register</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$router.push("/regis");
    },
    googlelogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          console.log("Google Token =" + token);
          console.log(user);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // The email of the user's account used.
          //const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    login() {
      //const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User = " + user);
          // ...
          this.LoginActive = false;
          this.$router.replace("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    },
    logout() {
      signOut(auth)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.mb-5 {
  padding: 50px;
}
</style>
