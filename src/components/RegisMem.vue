<template>
  <v-layout row wrap justify-center class="text-center">
    <v-flex xs6>
      <div class="mb-5">
        <h1 class="mb-5">Login</h1>
        <p>Username : <input type="text" required v-model="email" /></p>
        <p>Password : <input type="password" required v-model="password" /></p>
        <v-btn @click="register()">Register</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
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
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User = " + user);
          this.$router.replace("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // ..
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
