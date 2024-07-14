import type { AxiosResponse } from "axios";
import { instance } from "./axios";
import type { SaveSchedule } from "@/interface/schedule.interface";
const saveSchedule =  async (item:SaveSchedule):Promise<AxiosResponse> =>{
  return  await instance.post("/api/schedule",item)
}

export{
  saveSchedule
}