import { DayJs } from "./day"
export default{
  install(app:any){
    app.provide("dayjs",DayJs)
  }
}