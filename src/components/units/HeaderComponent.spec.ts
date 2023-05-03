import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';
describe('HeaderComponent unit testing', () => {
   let wrapper: any = null;
   let events: any = {};
   beforeEach(() => {
      wrapper = shallowMount(HeaderComponent);
      events = {};

      //가짜 이벤트리스너 정의
      document.addEventListener = jest.fn((event, callback) => {
         events[event] = callback;
      });

      document.body.innerHTML = `
      <div id='sidebar'></div>
      `;
   });

   test('sidebar가 존재하는지 확인', async () => {
      //id가 sideBar인 element 찾는 함수 호출
      await wrapper.vm.setSideBarEle();
      expect(wrapper.vm.sideBarEle).toBeTruthy();
   });

   test('햄버거바 클릭시 사이드바 열어주기', async () => {
      //햄버거 클릭
   });

   test('사이드바가 열려있을 경우 사이드바 영역 이외의 클릭시 닫아주기', () => {});
});

export {};
