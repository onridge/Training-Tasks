const monotoneArray = (array) => {
    if(array.length <=2){
        return true;
    }
    let diff = 0;
    for (let i = 0; i < array.length; ++i){
        const newDiff = array[i] - array[i - 1];

        if(newDiff * diff < 0){
            return false;
        }
        diff = newDiff;
    }
    return true;
};

it('should be true if array monotone', () => {
    expect(monotoneArray([1,2,3,4,5,6,7])).toBeTruthy();
});

it('should be false if array not monotone', () => {
    expect(monotoneArray([1,2,5,6,3,4])).toBeFalsy();
});

it('should be true if reverse array monotone', () => {
    expect(monotoneArray([5,4,3,2])).toBeTruthy();
});

it('should be true if all elements array ', () => {
    expect(monotoneArray([1,1,1,1,1,1,1])).toBeTruthy();
});

it('should be true if all elements array ', () => {
    expect(monotoneArray([1,1,3,3,3,5,6])).toBeTruthy();
});