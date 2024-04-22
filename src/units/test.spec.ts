const someModule = { api: () => 'origin' };
describe('test', () => {
   test('should ', async () => {
      //mockClear
      //mock calls,result를 clear를 시킨다
      const mockFn = jest.fn();
      mockFn('1');
      mockFn('1', '2');
      expect(mockFn.mock.calls[0]).toEqual(['1']);
      expect(mockFn.mock.calls[1]).toEqual(['1', '2']);

      mockFn.mockClear();

      expect(mockFn.mock.calls).toHaveLength(0);
   });

   test('mock 함수를 호출한 후 mockReset 호출', async () => {
      //mockReset
      //undefined 처리
      const mockAdd = jest.fn((a, b) => a + b);
      expect(mockAdd(1, 2)).toBe(3);

      mockAdd.mockReset();

      expect(mockAdd(1, 2)).toBe(undefined);
   });

   test('mockRestore', async () => {
      const originApi = someModule.api;
      const mockApi = jest.spyOn(someModule, 'api');

      const changeApi = someModule.api;
      expect(originApi).not.toBe(changeApi);
   });
});

export {}