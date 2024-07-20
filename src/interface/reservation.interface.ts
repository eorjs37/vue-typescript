export interface ReservationItem {
    date:Date;
    title:string;
    room:string
}

export interface ListItem {
    name:string;
    id:number,
    icon?:string,
    roomname:string,
    roomcode?:string,
    scheduleStartTime?:string;
    scheduleEndTime?:string;
    date?:Date
}

export interface RegisterItem {
    datatype : number,
    id?:number,
    scheduleStartTime:string | undefined;
    scheduleEndTime:string | undefined;
    meetingRoomCode?:string;
}