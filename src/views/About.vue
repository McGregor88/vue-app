<template>
  <div class="about pt-5">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">This is an about page</h1>
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