<template>
  <div class="about pt-5">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">This is an about page</h1>
      <div class="pt-2">
        <v-btn fab dark color="teal lighten-2">
          <v-icon dark>remove</v-icon>
        </v-btn>

        <v-btn fab dark color="red darken-2">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
    </v-layout>
    <Grid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid";

export default {
  name: "about",
  components: {
    Grid
  }
};
</script>

<style>
</style>
