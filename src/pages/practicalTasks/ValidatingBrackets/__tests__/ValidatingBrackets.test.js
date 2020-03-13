const validatingBrackets = (expression) => {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < expression.length; i++) {
        if(Object.keys(map).some(key => key === expression[i])) {
            stack.push(expression[i]);
        } else {
            if(!Object.keys(map).some(key => key === expression[i] || map[key] === expression[i])) {
                continue
            }
            if(map[stack.pop()] !== expression[i]) {
                return false
            }
        }
    }
    return stack.length === 0;
};

it('should be true after enter validating brackets', () => {
    expect(validatingBrackets('{}[]()')).toBeTruthy()
});

it('should be false after enter validating brackets', () => {
    expect(validatingBrackets('}{()')).toBeFalsy()
});

it('should be true after enter string with brackets', () => {
    expect(validatingBrackets('function () { if(true){}}')).toBeTruthy()
});

