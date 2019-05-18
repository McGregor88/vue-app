<template>
  <div class="about pt-5">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">This is an about page</h1>
      <div class="pt-2">
        <div class="counter text-md-center mb-2">{{ count }}</div>
        <v-btn fab dark color="teal lighten-2" @click="decrement">
          <v-icon dark>remove</v-icon>
        </v-btn>

        <v-btn fab dark color="red darken-2" @click="increment">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
    </v-layout>
    <Grid/>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
import Grid from "@/components/Grid";

export default {
  name: "about",
  components: {
    Grid
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
};
</script>

<style>
.counter {
  font-size: 18px;
}
</style>
