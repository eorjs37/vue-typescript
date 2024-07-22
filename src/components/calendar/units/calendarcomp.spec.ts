import { shallowMount, VueWrapper } from "@vue/test-utils";
import CalendarComp from "../CalendarComp.vue";


const Vcalendar = {
  template:"<div></div>",
  emits:["click-day","update-page"],
  props:["expanded","mode","attributes"],
}

describe("CalendarComp unit testing", () => {
  let wrapper: VueWrapper | null = null;
  beforeEach(async () => {
    wrapper = shallowMount(CalendarComp,{
      shallow:true,
      global:{
        stubs:{
          VCalendar:Vcalendar
        }
      },
      props:{
        currentdate:new Date(),
        reslist:[
          {
            key:"group1",
            highlight:"blue",
            dates:new Date(),
            list:[
              {
                name:"10:00 ~ 12:00",
                id:1,
                roomname:"소회의실1",
                roomcode:"A0001",
                scheduleStartTime:"10:00",
                scheduleEndTime:"12:00",
                date:new Date()
              }
            ]
          }
        ]
      }
    });
  });
  test("일자 클릭 이벤트를 클릭하면 상위 컴퍼넌트에(CalendarComp.vue)에 날짜 값을 전송한다", async () => {
    // wrapper.vm.dayClick()
    
  });

  test("달력에서 달을 옮기때마다, 현재 년-월의 값을 상위 컴퍼넌트에(CalendarComp.vue)에 전송한다", async () => {
    
  });
})