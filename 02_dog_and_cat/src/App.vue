<template>
  <div id="app">
    <div v-bind:style="{color: activeColor, fontSize: fondtSize + 'px'}"></div>
    <GetImage btnName="멍멍" @getAnimalImage="getImage" />
    <GetImage btnName="야옹" @getAnimalImage="getImage" />
    <img v-bind:src="animalUrl" alt />
  </div>
</template>

<script>
import GetImage from "./components/GetImage";
import axios from "axios";
export default {
  name: "app",
  components: {
    GetImage
  },
  methods: {
    getImage: function(name) {
      if (name === "멍멍") {
        const DOG_URL = "https://dog.ceo/api/breeds/image/random";
        axios
          .get(DOG_URL)
          .then(response => {
            this.animalUrl = response.data.message;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        const CAT_URL = "https://api.thecatapi.com/v1/images/search";
        axios
          .get(CAT_URL)
          .then(response => {
            this.animalUrl = response.data[0].url;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },

  data: function() {
    return {
      animalUrl: "",
      activeColor: "red",
      fontSize: 30
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
