<template>
  <v-app>
    <Header/>
    <v-content>
      <Grid/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Grid,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
