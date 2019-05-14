<template>
  <v-app>
    <Header/>
    <v-content>
      <HelloWorld/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
