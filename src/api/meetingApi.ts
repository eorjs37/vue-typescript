import type { AxiosResponse } from "axios";
import { instance } from "./axios";

/**
 * @description 미팅 리스트
 */
const getMeetingList = async (date:string):Promise<AxiosResponse>=>{
  return await instance.get("/api/meetingall",{
    params:{
      date
    }})
}

export{
  getMeetingList
}