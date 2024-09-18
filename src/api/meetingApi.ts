import type { AxiosResponse } from "axios";
import { instance } from "./axios";

const getMonthSchedule = async (date:string):Promise<AxiosResponse>=>{
  return await instance.get("/api/meetingmonth",{
    params:{
      date
    }
  })
}

const meetingRoomList = async ():Promise<AxiosResponse> =>{
  return await instance.get("/api/meetingroom")
}

const getWeekSchedule = async (startDate:string,endDate:string):Promise<AxiosResponse>=>{
  return await instance.get("/api/meetingweek",{
    params:{
      startDate,
      endDate
    }
  })
}

export{
  getMonthSchedule,
  meetingRoomList,
  getWeekSchedule
}