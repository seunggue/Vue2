<template>
  <div>
    <button v-on:click="getCatImageUrl()">야옹</button>
    <img v-bind:src="catImageUrl" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      catImageUrl: ""
    };
  },
  methods: {
    getCatImageUrl: function() {
      const CAT_URL = "https://api.thecatapi.com/v1/images/search";
      axios
        .get(CAT_URL)
        .then(response => {
          this.catImageUrl = response.data[0].url;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>