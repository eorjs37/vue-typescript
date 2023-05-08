import { shallowMount } from '@vue/test-utils';
import BlogWrite from '@/views/BlogWrite.vue';
describe('BlogWrite unit testing', function () {
   let wrapper: any = null;
   let alert: any = null;

   beforeEach(() => {
      alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
      wrapper = shallowMount(BlogWrite);
   });

   test('제목 또는 내용이 비어있을 경우 alert 출력', () => {
      const submit = jest.spyOn(wrapper.vm, 'submit');

      wrapper.find('#submit').trigger('click');
      expect(submit).toHaveBeenCalled();
      expect(window.alert).toBeCalledWith('제목 또는 내용을 입력해주세요');
      alert.mockClear();
   });

   test('제목,내용이 초과할 경우 submit 클릭', async () => {
      const submit = jest.spyOn(wrapper.vm, 'submit');
      wrapper.find('#title').setValue('제목 입력공간입니다.10자이상을 입력하셨습니다.');
      wrapper
         .find('#contents')
         .setValue(
            '\n' + '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda commodi cum cupiditate doloremque ex facere ipsum iste itaque libero maxime quidem, reiciendis sequi sunt suscipit unde velit voluptates?'
         );

      await wrapper.find('#submit').trigger('click');

      //제목이 10자 초과하거나, 내용이 100자 초과할 경우 alert 호출하기

      expect(submit).toHaveBeenCalled();
      expect(window.alert).toBeCalledWith('제목은 10자 내용은 100자 이상 입력이 불가능합니다.');
      alert.mockClear();
   });

   test('제목 내용 10,100자 이하일 경우 submit 클릭', async () => {
      const submit = jest.spyOn(wrapper.vm, 'submit');
      wrapper.find('#title').setValue('제목');
      wrapper.find('#contents').setValue('컨텐츠');

      wrapper.find('#submit').trigger('click');
      expect(submit).toHaveBeenCalled();
      expect(window.alert).toBeCalledTimes(0);

      const registerApi = jest.spyOn(wrapper.vm, 'registerApi');
      wrapper.vm.registerApi();

      expect(registerApi).toHaveBeenCalled();
   });
});

export {};
