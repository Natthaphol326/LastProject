<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-container>
        <v-img class="green--text align-end" height="380px" :src="img"> </v-img>
      </v-container>
      <v-card-subtitle class="pb-0">number : {{ productid }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ description }}</div>
      </v-card-text>
      <v-container>
        <div><i class="fas fa-user"></i>&nbsp;${{ price }}</div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      productid: this.$route.params.id,
      description: this.$route.params.description,
      img: this.$route.params.img,
      price: this.$route.params.price,
    };
  },
};
</script>

<style></style>
