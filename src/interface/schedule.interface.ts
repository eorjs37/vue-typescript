export interface SaveSchedule{
    scheduleDate:string;
    scheduleStartTime:string;
    scheduleEndTime:string;
    scheduleTitle?:string;
    scheduleContents?:string;
    meetingRoomCode?:string;
    id?:number;
}

export interface ScheduleDate{
    startHour:string,
    startMin:string,
    endHour:string,
    endMin:string
}