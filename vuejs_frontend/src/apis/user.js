import Api from './server'
import AuthHeader from './authHeader'


// const REGISTER_END_POINT = "/user/register"
const LOGIN_END_POINT = "/auth/token/login/"
const LOGOUT_END_POINT = "/auth/token/logout"
const USER_INFO = "/auth/users/me/"

export default{
    // async register(form){
    //     await Csrf.getCookie();
    //     return Api.post(REGISTER_END_POINT,form)
    // },

    async login(form){
        return Api.post(LOGIN_END_POINT,form)
    },

    async logout(){
        return Api.post(LOGOUT_END_POINT, AuthHeader.authToken(),{ headers: AuthHeader.authHeader() })
    },

    auth(){
        console.log(AuthHeader.authHeader())
        return Api.get(USER_INFO, { headers: AuthHeader.authHeader() })
    },
    
}