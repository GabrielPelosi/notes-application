
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Popup from '.././components/Popup'
import history from './histoyConfig'

const setRequest = (config) => {
    const token = localStorage.getItem('jwt-token')
    config.headers = {
        'Authorization': token
    }
    return config
}

const onRequestError = (error) => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}
const onResponse = (response) => {
    console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = async (error)  => {
    const originalRequest = error.request;
    const status = error.response ? error.response.status : null

    if (status === 403) {
        history.push('/system-admin-login')
    }
}


export function setupInterceptorsTo(axiosInstance) {
    axiosInstance.interceptors.request.use(setRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}