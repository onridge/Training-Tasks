function fibonacci(num) {
    if(typeof num !== 'number') {
        return undefined
    }
    if (num === 1 || num === 0) {
        return [0, 1];
    }
    const s = fibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
}

it('should be return array with all numbers', () => {
    expect(fibonacci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

it('should be return array after calling function', () => {
    const result = fibonacci(7);

    expect(Array.isArray(result)).toBeTruthy();
});

it('should be return undefined after calling function without arguments', () => {
    expect(fibonacci()).toBe(undefined);
});

it('should be return 0,1 after calling function with 1', () => {
    expect(fibonacci(1)).toStrictEqual([0, 1]);
});
