import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let _this = this

    firebase.auth().onAuthStateChanged(function(user) {
      _this.$store.dispatch("stateChanged", user)
    });
  }
}).$mount('#app')
