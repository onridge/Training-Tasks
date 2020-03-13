const intersection = (array1, array2) => {
    const hashmap = {};
    const intersectionArray = [];

    array1.forEach((element)=>{
        hashmap[element] = 1;
    });

    array2.forEach((element) => {
        if (hashmap[element] === 1) {
            intersectionArray.push(element);
            hashmap[element]++;
        }
    });

    return intersectionArray;
};

it('should be return array with intersection', () => {
    expect(intersection([1,2,3,4], [4,2])).toEqual([4,2])
});

it('should be return empty array without intersection', () => {
    expect(intersection([1,2,3,4], [5,6])).toEqual([])
});

it('should be return empty array without intersection', () => {
    expect(intersection([1,2,3,4], [])).toEqual([])
});

it('should be return array with intersection', () => {
    expect(intersection([-1], [4,2,5,-1,7])).toEqual([-1])
});
