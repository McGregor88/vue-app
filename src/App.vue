<template>
  <v-app>
    <Header />
    <v-content>
      <Main />
      <Grid />
      <Table /> 
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Grid from "./components/Grid";
import Table from "./components/Table";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Main,
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
