import axios from "axios";
import BaseApi from "../BaseApi";

class UserApi extends BaseApi {
    constructor (BASE_API) {
        super()
        this.base_url = BASE_API;
    }
    getUser = async( params ) => {
       const res = await this.get('/user/', params )
       return res;
    }
}


export const Api = new UserApi('https://discord.com')