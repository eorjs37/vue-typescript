import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent unit testing', () => {
   let wrapper: any = null;

   beforeEach(() => {
      wrapper = shallowMount(HeaderComponent);

      document.body.innerHTML = `
      <div id='sidebar'></div>
      `;
   });

   test('sidebar가 존재하는지 확인', async (): Promise<void> => {
      //id가 sideBar인 element 찾는 함수 호출
      await wrapper.vm.setSideBarEle();
      expect(wrapper.vm.sideBarEle).toBeTruthy();
   });

   test('햄버거바 클릭시 닫혀있을 경우 열어주기', async (): Promise<void> => {
      //is-open 제거
      wrapper.vm.sideBarEle.classList.remove('is-open');

      wrapper.find('.hambuger').trigger('click');

      expect(wrapper.vm.sideBarEle.classList.contains('is-open')).toBeTruthy();
   });

   test('사이드바가 열려있을 경우 사이드바 영역 이외의 클릭시 닫아주기', () => {
      //is-open 추가
      wrapper.vm.sideBarEle.classList.add('is-open');

      wrapper.vm.isOpenSideBar();

      expect(wrapper.vm.sideBarEle.classList.contains('is-open')).toBeFalsy();
   });
});

export {};
