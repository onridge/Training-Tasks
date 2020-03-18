function searchAnagram(words1, words2) {
    const str1 = words1
        .split('')
        .sort()
        .join('');

    const str2 = words2
        .split('')
        .sort()
        .join('');

    return str1.toLowerCase() === str2.toLowerCase();
}

it('should be true after enter 2 valid words', () => {
    expect(searchAnagram('вертикаль', 'кильватер')).toBeTruthy();
});

it('should be return true after calling function', () => {
    const result = searchAnagram('апельсин', 'спаниель');

    expect(typeof result).toBe('boolean');
});

it('should be return false if 1 word dont valid', () => {
    expect(searchAnagram('корабль', 'капитан')).toBeFalsy();
});

it('should be return true if word case not equal', () => {
    expect(searchAnagram('КуКлА', 'кулак')).toBeTruthy();
});