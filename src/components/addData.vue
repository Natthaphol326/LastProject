<template>
  <v-container>
    <div class="setForm">
      <h1>Add</h1>
      <v-text-field
        label="Description"
        placeholder="description"
        outlined
        v-model="desC"
      ></v-text-field>
      <v-text-field
        label="Img Url"
        placeholder="Url"
        outlined
        v-model="img"
      ></v-text-field>
      <v-text-field
        label="Price"
        placeholder="price"
        outlined
        v-model="price"
      ></v-text-field>

      <v-btn elevation="2" @click="add()">Add</v-btn>
    </div>
  </v-container>
</template>

<script>
import {
  collection,
  addDoc,
  //   getDocs,
  //   doc,
  //   deleteDoc,
} from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      desC: "",
      img: "",
      price: "",
    };
  },
  methods: {
    async add() {
      try {
        const docRef = await addDoc(collection(db, "colectionStore"), {
          desC: this.desC,
          img: this.img,
          price: this.price,
        });
        //await this.readData();
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style scoped>
.setForm {
  padding: 50px;
}
</style>
