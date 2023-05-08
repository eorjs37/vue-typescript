import { shallowMount } from '@vue/test-utils';
import SideBarComponent from '@/components/SideBarComponent.vue';
import { useRouter } from 'vue-router';

jest.mock('vue-router', () => ({
   useRouter: jest.fn(() => ({
      push: () => {}
   }))
}));
describe('SideBarComponent unit testing', () => {
   let wrapper: any = null;
   let push: any = null;
   beforeEach(() => {
      push = jest.fn();
      (useRouter as jest.Mock).mockImplementation(() => ({
         push
      }));

      wrapper = shallowMount(SideBarComponent);
   });

   test('move 함수 이동 호출 확인', () => {
      wrapper.vm.move('/blog-write');

      expect(push).toHaveBeenCalled();
   });
});

export {};
