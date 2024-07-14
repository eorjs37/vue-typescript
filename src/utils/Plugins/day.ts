import dayjs from "dayjs";

function DayJs(){
  this.now = null;
}

DayJs.prototype.setNow =  function(){
  this.now = dayjs();
}
DayJs.prototype.getNow = function(){
  return this.now;
}

DayJs.prototype.getFormat = function(format){
  return dayjs().format(format)
}

export{
  DayJs
}