import Vue from 'vue';
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";


import Auth from "./modules/auth"


const AppDataState = createPersistedState({
    paths: [
        'Auth.user',
        'Auth.authenticated',
        'Auth.token'
    ]
})

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
        Auth
    },

    plugins: [AppDataState],

});