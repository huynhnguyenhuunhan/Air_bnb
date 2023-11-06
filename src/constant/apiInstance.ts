import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NiIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTg4MTYwMDAwMCIsIm5iZiI6MTY3ODI5NDgwMCwiZXhwIjoxNzA2MDI5MjAwfQ.7_G72JssvlfZA0SzyXUjBEuFceGkXY70Ar4ixqy-Wh0'
export const apiInstance = (config?: CreateAxiosDefaults) => {
    const api = axios.create(config)

    api.interceptors.request.use((config) => {
        return {
            ...config,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                // Authorization: 'Bearer' + ' ' + localStorage.getItem('accessToken'),
                token: localStorage.getItem('token'),
            } as unknown as AxiosRequestHeaders,
        }
    })
    return api
}