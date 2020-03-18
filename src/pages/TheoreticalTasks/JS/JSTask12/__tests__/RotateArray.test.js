import { rotateArray } from "../rotateArray";

it('should be return array rotate on 90 degrees', () => {
    const arr1 = [1,3,5,7];
    const arr2 = [2,4,6,8];

    expect(rotateArray([arr1, arr2])).toEqual([[2,1], [4,3], [6,5], [8,7]])
});

it('should be return empty array if calling function without arguments', () => {
    expect(rotateArray()).toEqual([]);
});
