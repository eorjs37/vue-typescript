import { shallowMount } from "@vue/test-utils";
import CalendarComp from "../CalendarComp.vue";
import VCalendar from "v-calendar";
describe("CalendarComp unit testing", () => {
  let wrapper: any = null;
  beforeEach(async () => {
    wrapper = shallowMount(CalendarComp,{
      shallow:true,
      global:{
        stubs:{
          VCalendar:{
            template:"<div></div>",
            props:["attributes"]
          }
        }
      }
    });
  });
  test("test1", async () => {
    expect(1).toBe(1)
  });
})