import User from "../../../apis/user";
import router from "../../../router/index"

//Login
export const login = ({ commit }, credentials) => {

    commit('SET_LOADING',true)
    commit('CLEAR_OTHER_ERRORS')

    User.login(credentials).then(response => {
        console.log("IN AUTH")
        console.log(response.data)
        if(response.data.auth_token){
            commit('SET_TOKEN', response.data.auth_token)
        }
        User.auth().then(response => {
        commit('SET_USERDATA', response.data);
        commit('SET_AUTHENTICATED',true);
        commit('SET_AUTH_ERRORS',null);
        commit('SET_LOADING',false)
        router.push({ name: 'dashboard' });
        }).catch((error) => {
            console.log("Auth catch ==>"+error)
            error = error+". Can't connect to the server."
            commit('SET_OTHER_ERRORS',error)
            commit('SET_USERDATA', null);
            commit('SET_AUTHENTICATED',false);
            commit('SET_LOADING',false);
        })
    })
    .catch((error) => {
        if(error.response != undefined)
        {
            let error_data = error.response.data
            console.log(error.response.status)
            commit('SET_USERDATA', null);
            commit('SET_AUTHENTICATED',false);
            commit('SET_AUTH_ERRORS',error_data.non_field_errors)
            
            if (error.response.status != 400) {
                let error_message = error.response.status+" "+error.response.statusText
                commit('SET_OTHER_ERRORS',error_message)
            }
        }
        else
        {
            error = error+". Can't connect to the server."
            commit('SET_OTHER_ERRORS',error)
        }
        
        
        commit('SET_LOADING',false)
    })
    
}

//Logout
export const logout = ({commit}) => {
    commit('SET_LOGOUT_LOADING',true)
    commit('CLEAR_OTHER_ERRORS')
    User.logout().then(() => {
        commit('SET_LOGOUT_LOADING',false)
        commit('SET_USERDATA', null);
        commit('SET_TOKEN', '');
        commit('SET_AUTHENTICATED', false);
        commit('SET_AUTH_ERRORS',null);
        router.push({ name: 'login' });
    })
    .catch((error) => {
        commit('SET_LOGOUT_LOADING',false)
        console.log('LOGOUT Err ==>' + error)
        if(error.response != undefined)
        {
            let error_message = error.response.status+" "+error.response.statusText+". Can't connect to the server."
            commit('SET_OTHER_ERRORS',error_message)
        }
        else
        {
            error = error+". Can't connect to the server."
            commit('SET_OTHER_ERRORS',error)
        }
    })
}

export const is_authenticated = ({commit}) => {
    commit('IS_AUTHENTICATED')
}





