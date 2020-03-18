function getNestedObject(str) {
    if(str === undefined || typeof str !== 'string'){
        return undefined;
    }
    const arrayWords = str.split('.');

    return arrayWords.reduceRight((obj, value) => {
        const newObj = {
            [value]: obj,
        };

        return newObj;
    }, null);
}

it('should be Object after calling function', () => {
    expect(typeof getNestedObject('')).toBe('object');
});

it('should be Object from valid string', () => {
    const value = getNestedObject('a.b.c.d');

    expect(value).toEqual({ a: { b: { c: { d: null } } } });
});

it('should be return undefined if calling function without arguments ', () => {
    expect(getNestedObject()).toBe(undefined)
});

it('should be return undefined if calling function without string', () => {
    expect(getNestedObject(1,2,3,4,5)).toBe(undefined);
});

it('should be return undefined if calling function with number', () => {
    expect(getNestedObject(1,2,3,4,5)).toBe(undefined);
});

it('should be return undefined if calling function with object', () => {
    expect(getNestedObject({ key: 'value' })).toBe(undefined);
});
