import { appInfo } from "../constants/appinfos"
import axiosClient from "./axiosClient"

class AuthApi {
    HandleAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'put' | 'delete',

    ) => {
        return await axiosClient(`${appInfo.BASE_URl}/auth${url}`, {
            method: method ?? 'get', 
            data,
        })
    }
}

const authenticationAPI = new AuthApi();

export default authenticationAPI;