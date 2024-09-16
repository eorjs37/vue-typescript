interface ScheduleDate{
    startHour:string,
    startMin:string,
    endHour:string,
    endMin:string
}
/**
 * @description 캘린더 데이터 포멧
 */
const formatCalendarDate:ScheduleDate = (startTime:number = 540,endTime:number = 660)=>{
  
  const startHour = Math.floor(startTime / 60 > 9) ? String(Math.floor(startTime / 60)) : `0${Math.floor(startTime / 60)}`;
  const startMin = startTime % 60 > 9 ? String(startTime % 60) : `0${startTime % 60}`;

  const endHour = Math.floor(endTime / 60 > 9) ? String(Math.floor(endTime / 60)) : `0${Math.floor(endTime / 60)}`;
  const endMin = endTime % 60 > 9 ? String(endTime % 60) : `0${endTime % 60}`;
    
  return{
    startHour,
    startMin,
    endHour,
    endMin
  }

}

export{
  formatCalendarDate
}