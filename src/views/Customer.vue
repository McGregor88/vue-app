<template>
  <div class="customer pt-5">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">I'm a customer</h1>
      <p class="counter">I see {{ totalTvCount }} TVs!</p>
      <p v-show="happyStaff">The staff seems happy!</p>
      <v-alert
        v-show="!totalTvCount"
        :value="true"
        type="error"
      >
        I can't buy any..
      </v-alert>
      <v-btn 
        dark
        color="teal"
        :disabled="!totalTvCount"
        @click="buyTv"
      >
        Buy TV
      </v-btn>
      <v-btn 
        dark
        color="teal"
        :disabled="totalTvCount < 2"
        @click="buyTwoTvs"
      >
        Buy Two TVs
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "customer",
  computed: {
    ...mapState(["totalTvCount"]),
    ...mapGetters(["happyStaff"])
  },
  methods: {
    ...mapActions(["removeTv"]),
    buyTv() {
      this.removeTv(1)
    },
    buyTwoTvs() {
      this.removeTv(2)
    }
  }
};
</script>

<style lang="sass" scoped>
.counter
  font-size: 18px
</style>