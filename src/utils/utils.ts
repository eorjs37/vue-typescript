import type { ScheduleDate } from "@/interface/schedule.interface";
type formatCalendarDateType = (a:number,b:number)=>ScheduleDate
/**
 * @description 캘린더 데이터 포멧
 */
const formatCalendarDate:formatCalendarDateType = (startTime:number = 540,endTime:number = 660)=>{
  
  const startHour:string = Math.floor(startTime / 60 ) > 9 ? String(Math.floor(startTime / 60)) : `0${Math.floor(startTime / 60)}`;
  const startMin:string = startTime % 60 > 9 ? String(startTime % 60) : `0${startTime % 60}`;

  const endHour:string = Math.floor(endTime / 60 ) > 9 ? String(Math.floor(endTime / 60)) : `0${Math.floor(endTime / 60)}`;
  const endMin:string = endTime % 60 > 9 ? String(endTime % 60) : `0${endTime % 60}`;
  const item:ScheduleDate={
    startHour:startHour,
    startMin:startMin,
    endHour:endHour,
    endMin:endMin
  }
  return item
}

export{
  formatCalendarDate
}