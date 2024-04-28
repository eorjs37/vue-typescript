export interface navernewsList {
    description: string;
    link: string;
    originallink: string;
    pubDate: string;
    title: string;
 }

 export interface navernewsResponse {
    display:number;
    items:navernewsList[];
    lastBuildDate:string;
    start:number;
    total:number;
 }