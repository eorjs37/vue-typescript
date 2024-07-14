import { DayJs } from "./day"
export default{
  install(app){
    app.provide("dayjs",DayJs)
  }
}