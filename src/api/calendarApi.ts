import list from "@/assets/mock/calendarlist.json"
import { instance } from "./axios"; 
import type { SaveSchedule } from "@/interface/schedule.interface";
const getCalendarList = ()=>{
  return Promise.resolve({
    data:list
  })
}

const saveSchedule = (item:SaveSchedule)=>{
  return instance.post("/api/schedule",item);
}

const updateSchedule = (item:SaveSchedule) =>{
  return instance.put("/api/schedule",item);
}

const deleteSchedule = (id:number) =>{
  return instance.delete(`/api/schedule/${id}`)
}

export{
  getCalendarList,
  saveSchedule,
  updateSchedule,
  deleteSchedule
}