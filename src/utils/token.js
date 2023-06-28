export const getToken = () => {
    const token = sessionStorage.getItem('user_token')

    return token
}

export const setToken = (token) => {
    sessionStorage.setItem('user_token', token)
}

export const removeToken = () => {
    sessionStorage.removeItem('user_token')
}