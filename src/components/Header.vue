<template>
  <div class="header">

    <v-layout wrap>
      <v-navigation-drawer 
        v-model="drawer" 
        :mini-variant="mini" 
        absolute 
        dark 
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile v-for="link in links" :key="link.title" :to="link.url">
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>

    <v-toolbar dark color="teal lighten-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title class="white--text">Learn English</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left>{{ link.icon }}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      mini: false,
      right: null
    };
  },
  computed: {
    isUserAuth() {
      return this.$store.getters.isUserAuth
    },
    links() {
      return this.isUserAuth ? 
      [
        {
          url: "/books",
          title: "Читать",
          icon: "visibility"
        },
        {
          url: "/profile",
          title: "Мой кабинет",
          icon: "account_circle"
        },
        {
          url: "/logout",
          title: "Выйти",
          icon: "exit_to_app"
        }
      ] : [
        {
          url: "/books",
          title: "Читать",
          icon: "visibility"
        },
        {
          url: "/signin",
          title: "Войти",
          icon: "input"
        },
        {
          url: "/signup",
          title: "Зарегистрироваться",
          icon: "lock_open"
        }
      ]
    }
  }
};
</script>

<style lang="sass">
</style>