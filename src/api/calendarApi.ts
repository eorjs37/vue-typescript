import list from "@/assets/mock/calendarlist.json"
const getCalendarList = ()=>{
  return Promise.resolve({
    data:list
  })
}

export{
  getCalendarList
}