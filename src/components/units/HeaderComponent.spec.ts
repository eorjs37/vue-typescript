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
      //햄버거 클릭
      const isOpenSideBar = jest.spyOn(wrapper.vm, 'isOpenSideBar');
      await wrapper.find('.hambuger').trigger('click');
      //함수 호출 여부 확인
      await expect(isOpenSideBar).toHaveBeenCalled();
   });

   test('사이드바가 열려있을 경우 사이드바 영역 이외의 클릭시 닫아주기', () => {});
});

export {};
