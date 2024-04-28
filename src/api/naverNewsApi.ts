import type { AxiosResponse } from "axios";
import { instance } from './axios';
const getNaverNews = (query:string =''): Promise<AxiosResponse<any>> =>{
    return instance.get(`/api/navernews`,{
        params:{
            query
        }
    })
}

export { getNaverNews }