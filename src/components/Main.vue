<template>
  <v-parallax dark :src="require('../assets/bg.jpg')" height="800">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">Welcome to Vuetify</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="sass" scoped>
.v-parallax::after
  content: ""
  display: block
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.2)
  z-index: 1

// Laptop
@media only screen and (max-width: 1366px)
  .v-parallax
    height: 632px !important
</style>