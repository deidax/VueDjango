export const isAuth = (state) => {
    return state.authenticated;
}

export const getUser = (state) => {
    return state.user;
}

export const getToken = (state) => {
    return state.token;
}

export const getAuthErrors = (state) => {
    return state.auth_errors;
}

export const getOtherErrors = (state) => {
    return state.other_errors;
}

export const isLoading = (state) => {
    return state.loading
}

export const isLogoutLoading = (state) => {
    return state.logout_loading
}