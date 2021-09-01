<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                       
                        <v-alert
                          v-if="getAuthErrors != null"
                          dense
                          outlined
                          type="error"
                        >
                          <strong>Oops!..Something is wrong:</strong>
                          <ul>
                            <li v-for="(error,index) in getAuthErrors" :key="index">{{error}}</li>
                          </ul>
                        </v-alert>

                        <v-form class="login" @submit.prevent="loginUser" id="auth-form">
                           <v-text-field
                              prepend-icon="mdi-account-tie"
                              v-model="form.username"
                              name="Username"
                              label="Username"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="mdi-lock"
                              v-model="form.password"
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="primary" form="auth-form" :loading="isLoading">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>


<script>
import {mapActions,mapGetters} from "vuex"

  export default {
    name: 'AuthForm',

    data()
    {
      return{
        form:{
          username:'',
          password:''
        },
      }
    },

    computed: {
      ...mapGetters("Auth",["isLoading"]),
      ...mapGetters("Auth", ["getAuthErrors"]),
    },

    methods:{
      ...mapActions('Auth',['login']),

        loginUser(){
          this.login(this.form)
        },

        
        
    },
  }
</script>
