import dayjs from "dayjs";

interface dayjsType{
  now:Date|null;
  setNow():void;
  getNow():void;
  getFormat():void;
}

function DayJs(this:dayjsType){
  this.now = new Date();
}

DayJs.prototype.setNow =  function(){
  this.now = dayjs();
}
DayJs.prototype.getNow = function(){
  return this.now;
}

DayJs.prototype.getFormat = function(format:string){
  return dayjs().format(format)
}

export{
  DayJs
}