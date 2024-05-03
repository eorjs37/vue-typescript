import type { AxiosResponse } from "axios";
import { instance } from "./axios";
import type { navernewsResponse } from "../interface/naverResponse.interface";
const getNaverNews = (query:string =""): Promise<AxiosResponse<navernewsResponse>> =>{
  return instance.get("/api/navernews",{
    params:{
      query
    }
  })
}

export { getNaverNews }