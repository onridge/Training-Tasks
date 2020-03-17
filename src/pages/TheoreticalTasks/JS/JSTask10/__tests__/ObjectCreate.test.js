import { objectCreate } from '../polyfill';

it('should return Object with prototype Object', () => {
    const newObj = objectCreate(Object.prototype);

    expect(Object.getPrototypeOf(newObj)).toBe(Object.prototype);
});

it('change link after calling Object.create', () => {
    const obj = { key: 'value' };
    const newObj = objectCreate(obj.prototype);

    expect(newObj === obj).toBeFalsy();
});