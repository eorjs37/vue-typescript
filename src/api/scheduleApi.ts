import type { AxiosResponse } from "axios";
import { instance } from "./axios";
import type { SaveSchedule } from "@/interface/schedule.interface";
const saveSchedule =  async (item:SaveSchedule):Promise<AxiosResponse> =>{
  return  await instance.post("/api/schedule",item)
}

const updateSchedule = async (item:SaveSchedule):Promise<AxiosResponse> =>{
  return await instance.put("/api/schedule",item)
}

const deleteScheduleId = async(deleteId:number):Promise<AxiosResponse> =>{
  return await instance.delete(`/api/schedule/${deleteId}`)
}

export{
  saveSchedule,
  updateSchedule,
  deleteScheduleId
}