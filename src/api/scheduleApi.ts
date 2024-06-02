import type { AxiosResponse } from "axios";
import { instance } from "./axios";
import type { SaveSchedule } from "@/interface/schedule.interface";

/**
 * 
 * @param schedule 스케줄 저장 정보
 * @returns Promise
 */
const insertSchedule = async (schedule:SaveSchedule):Promise<AxiosResponse>=>{
  return await instance.post("/api/schedule",schedule)
}

export{
  insertSchedule
}