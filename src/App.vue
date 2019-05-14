<template>
  <v-app>
    <Header/>
    <v-content>
      <Grid/>
      <Table/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Grid from "./components/Grid";
import Table from "./components/Table";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Grid,
    Table,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
