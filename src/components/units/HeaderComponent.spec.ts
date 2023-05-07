import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent unit testing', () => {
   let wrapper: any = null;

   beforeEach(() => {
      wrapper = shallowMount(HeaderComponent);
      jest.resetAllMocks();
      document.body.innerHTML = `
      <div id='sidebar'></div>
      `;
   });

   test('sidebar가 존재하는지 확인', async (): Promise<void> => {
      //id가 sideBar인 element 찾는 함수 호출
      wrapper.vm.setSideBarEle();
      expect(wrapper.vm.sideBarEle).toBeTruthy();
   });

   test('햄버거바 클릭시 열어주기 ', async () => {
      wrapper.vm.sideBarEle.classList.remove('is-open');

      const isOpenSideBar = jest.spyOn(wrapper.vm, 'isOpenSideBar');
      const hacOpenClass: any = jest.spyOn(wrapper.vm, 'hacOpenClass').mockImplementation(() => {
         return false;
      });
      const openSideBar: any = jest.spyOn(wrapper.vm, 'openSideBar');

      wrapper.find('.hambuger').trigger('click');

      //isOpenSideBar 함수 호출
      expect(isOpenSideBar).toHaveBeenCalled();
      //hasOpenClass 호출
      const result = hacOpenClass();
      expect(hacOpenClass).toHaveBeenCalled();
      //return 값이 false 확인
      expect(result).toBeFalsy();
      //return false이면 , openSideBar 호출
      openSideBar();
      expect(openSideBar).toHaveBeenCalled();
      //사이드바 is-open 존재하는지 확인
      expect(wrapper.vm.sideBarEle.classList.contains('is-open')).toBeTruthy();
   });

   test('햄버거바 이외의 영역 클릭시 닫아주기', () => {
      wrapper.vm.sideBarEle.classList.add('is-open');
      const isOpenSideBar: any = jest.spyOn(wrapper.vm, 'isOpenSideBar');
      const hacOpenClass: any = jest.spyOn(wrapper.vm, 'hacOpenClass').mockImplementation(() => {
         return true;
      });
      const closeSideBar: any = jest.spyOn(wrapper.vm, 'closeSideBar');

      isOpenSideBar();
      expect(isOpenSideBar).toHaveBeenCalled();
      const result = hacOpenClass();

      expect(hacOpenClass).toHaveBeenCalled();
      //return 값이 false 확인
      expect(result).toBeTruthy();
      //return true이면 , openSideBar 호출
      closeSideBar();
      expect(closeSideBar).toHaveBeenCalled();
      //사이드바 is-open 존재하는지 확인
      expect(wrapper.vm.sideBarEle.classList.contains('is-open')).toBeFalsy();
   });
});

export {};
