<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12 pb-2">
          <v-toolbar dark color="teal lighten-2">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert
              :value="error"
              type="warning"
            >
              {{ error }}
            </v-alert>
            <v-form class="pt-2">
              <v-text-field prepend-icon="person" name="email" label="E-mail" type="email" required v-model="email"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary" 
              @click.prevent="signup"
              :disabled="processing"
            >
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError
    },
    processing() {
      return this.$store.getters.getProcessing
    },
    isUserAuth() {
      return this.$store.getters.isUserAuth
    }
  },
  watch: {
    isUserAuth(val) {
      if(val === true)
        this.$router.push("/")
    }
  },
  methods: {
    signup() {
      this.$store.dispatch(
        "signup", 
        {
          email: this.email, 
          password: this.password
        }
      )
    }
  }
};
</script>

<style lang="sass" scoped>
</style>