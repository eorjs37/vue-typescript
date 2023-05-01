import { shallowMount } from '@vue/test-utils';
import ChildComponent from '@/components/ChildComponent.vue';
describe('first commit', () => {
   let wrapper: any = null;
   beforeEach(() => {
      wrapper = shallowMount(ChildComponent);
   });
   test('testing', () => {});
});
export {};
