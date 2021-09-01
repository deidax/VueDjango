<template>
  <v-app>
    <v-main>
      <span style="display: none">{{displayOtherServerErrors}}</span>
      <router-view/>

      <!-- Server errors -->
      <v-snackbar
        v-model="snackbar"
        color="red"
        :vertical="true"
      >
      <v-icon>mdi-alert</v-icon>
      <strong style="margin-left: 5px">Oops!...Something is wrong</strong>
        <ul>
          <li v-for="(error, index) in getOtherErrors" :key="index">{{error}}</li>
        </ul>
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions,mapGetters} from "vuex"

export default {
  name: 'App',

  data: () => ({
    snackbar: false,
  }),

  computed: {
      ...mapGetters("Auth",["getOtherErrors"]),

      displayOtherServerErrors(){
        if(this.getOtherErrors == null || this.getOtherErrors.length == 0)
          return this.snackbar = false
        return this.snackbar = true
      }
  }

};
</script>
