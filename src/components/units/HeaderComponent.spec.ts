import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';
describe('HeaderComponent unit testing', () => {
   let wrapper: any = null;
   let setSideBarEleFunc: any = null;
   let addClickEventFunc: any = null;
   let addEscEventFunc: any = null;
   beforeEach(() => {
      wrapper = shallowMount(HeaderComponent);
      setSideBarEleFunc = wrapper.vm.setSideBarEle = jest.fn();
      addClickEventFunc = wrapper.vm.addClickEvent = jest.fn();
      addEscEventFunc = wrapper.vm.addEscEvent = jest.fn();
      document.body.innerHTML = `
         <div id='sidebar'>
         
</div>
      `;
   });

   test('onMounted hook에서 setSideBarEle, addClickEvent, addEscEvent 호출여부확인', () => {
      setSideBarEleFunc();
      addClickEventFunc();
      addEscEventFunc();
      expect(setSideBarEleFunc).toHaveBeenCalled();
      expect(addClickEventFunc).toHaveBeenCalled();
      expect(addEscEventFunc).toHaveBeenCalled();
   });

   test('setSideBarEle를 통해서 id=sideBar를 가진 DOM을 찾아서 sideBarEle에 값 세팅하는지 확인', () => {
      wrapper.vm.setSideBarEle();
      expect(wrapper.vm.sideBarEle).toBeTruthy();
   });

   test('사이드바가 닫혀있을 경우 열어주기', async () => {
      //햄버거 클릭
      wrapper.find('.hambuger').trigger('click');
   });
});

export {};
