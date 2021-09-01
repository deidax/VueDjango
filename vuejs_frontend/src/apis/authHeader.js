import Store from '../store'

export default{
    authHeader(){
        
        let token = Store.getters['Auth/getToken']
        if(token){
            return { Authorization: 'Token ' + token}
        }
        else {
            return {}
        }
        
    },

    authToken(){

        let token = Store.getters['Auth/getToken']
        if(token){
            return token
        }
        else {
            return ''
        }

    }
}