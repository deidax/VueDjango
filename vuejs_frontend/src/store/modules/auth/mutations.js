// import state from "../../state";

export const SET_USERDATA = (state, userData) => {
    state.user = userData;
    state.authenticated = true;
    // localStorage.setItem('user', JSON.stringify(userData));
}

export const SET_TOKEN = (state, token) => {
    state.token = token;
}

export const SET_AUTHENTICATED = (state, value) => {
    state.authenticated = value
}

export const GET_USER = (state) => {
    return state.user
}

export const IS_AUTHENTICATED = (state) => {
    return state.authenticated
}

export const SET_AUTH_ERRORS = (state,value) => {
    state.auth_errors = value
}

export const CLEAR_AUTH_ERRORS = (state) => {
    state.auth_errors = null
}

export const SET_OTHER_ERRORS = (state,value) => {
    state.other_errors.push(value)
}

export const CLEAR_OTHER_ERRORS = (state) => {
    state.other_errors.length = 0
}

export const SET_LOADING = (state,value) => {
    state.loading = value
}

export const SET_LOGOUT_LOADING = (state,value) => {
    state.logout_loading = value
}
