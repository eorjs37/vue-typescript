import type { AxiosResponse } from "axios";
import { instance } from "./axios";

const getMonthSchedule = async (date:string):Promise<AxiosResponse>=>{
  return await instance.get("/api/meetingmonth",{
    params:{
      date
    }
  })
}

export{
  getMonthSchedule
}