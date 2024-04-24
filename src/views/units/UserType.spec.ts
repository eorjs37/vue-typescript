import { shallowMount  } from '@vue/test-utils';
import UserType from '../UserType.vue';

describe('사용자 권한별 화면', () => {
    let wrapper:any = null;

    beforeEach(() => {
        wrapper = shallowMount(UserType);    
    });

    
    describe('마스터 권한 사용자', () => {
        test('should ', () => {
            console.log(wrapper);
            
        });
    });

    describe('유저 권한 사용자', () => {
        test('should ', () => {
            expect(1).toBe(1)
        });
    });

    describe('게스트 권한 사용자', () => {
        test('should ', () => {
            expect(1).toBe(1)
        });
    });
});