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
    date?:Date
}