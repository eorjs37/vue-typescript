import type { AxiosResponse } from "axios";
import { instance } from "./axios";


const getMeetingMonth = (date:string):Promise<AxiosResponse<any,any>> =>{
  return instance.get("/api/meetingmonth",{
    params:{
      date
    }
  });
}

export{
  getMeetingMonth
}