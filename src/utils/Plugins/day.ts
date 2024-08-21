import dayjs from "dayjs";

interface dayjsType{
  now:Date|null;
  dayJs:any;
  setNow():void;
  getNow():void;
  getFormat():void;
  getDayJs():void;
}

function DayJs(this:dayjsType,dateString = new Date().toDateString()){
  this.now = new Date();
  this.dayJs = dayjs(dateString)
}

DayJs.prototype.setNow =  function(){
  this.now = dayjs();
}
DayJs.prototype.getNow = function(){
  return this.now;
}

DayJs.prototype.getFormat = function(format:string,date){
  return dayjs(date).format(format)
}

DayJs.prototype.getDayJs = function(){
  return this.dayJs;
}

export{
  DayJs
}