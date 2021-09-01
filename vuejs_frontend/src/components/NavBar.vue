<template>
<div>
      <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>Project PFE</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      
      <!-- <v-btn
        text
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
        <span class="mr-2">{{ item.title }}</span>
        <v-icon left dark>{{ item.icon }}</v-icon>
      </v-btn> -->
      <v-chip
        class="ma-2"
        color="green"
        text-color="white"
      >
        <v-icon left dark>mdi-account-tie</v-icon>
        {{ getUser.username }}
      </v-chip>
      <v-btn
        text
        @click="logout()">
        <span class="mr-2">Logout</span>
        <v-icon left dark>mdi-logout</v-icon>
      </v-btn>
      
    </v-app-bar>
    <v-overlay :value="isLogoutLoading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
</div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"

export default {
  name: "NavBar",
  data(){
    return {
      appTitle: 'PFE Project',
      sidebar: false,
    //   menuItems: [
    //       { title: 'Logout', path: '/home', icon: 'mdi-logout' },
    //  ]
    }
  },

  methods: {
    ...mapActions('Auth',['logout']),
  },
  computed: {
    ...mapGetters("Auth", ["getUser"]),
    ...mapGetters("Auth", ["isLogoutLoading"])

  }

};

</script>
