import { newAssign } from '../polyfill';

describe('Object assign', () => {
    const obj1 = {a:1};
    const obj2 = {b:2};
    const obj3 = {c:3};

    it('should return Object with assign fields', () => {
        expect(newAssign(obj1, obj2, obj3)).toStrictEqual({a: 1, b: 2, c: 3});
    });

    it('should return undefined if call function without arguments', () => {
        expect(newAssign()).toStrictEqual(undefined);
    });

    it('should return undefined if call function without target', () => {
        expect(newAssign(undefined, obj2)).toStrictEqual(undefined);
    });


});
