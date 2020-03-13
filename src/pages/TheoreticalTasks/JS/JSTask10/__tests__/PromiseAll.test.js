import { newPromiseAll } from '../polyfill';

const getPromise = (value) => new Promise((resolve) => resolve(`Resolve_${value}`));
const getDelayedPromise = (value) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolve_${value}`);
        }, 3000);
    });
const promise1 = getPromise('first');
const promise2 = getDelayedPromise('second');
const promise3 = getPromise('third');

it('should return all promises', () => {
    expect(newPromiseAll([promise1, promise2])).resolves.toStrictEqual(['Resolve_first', 'Resolve_second']);
});

it('should return error', () => {
    try {
        const rejectedPromise = new Promise((resolve, reject) => reject('error'));

        newPromiseAll([promise1, promise2, rejectedPromise]);
    } catch (e) {
        expect(e).toEqual('error');
    }
});

it('should return empty array if args is empty', () => {
    expect(newPromiseAll()).resolves.toStrictEqual([]);
});

it('should return empty array', () => {
    expect(newPromiseAll([])).resolves.toEqual({});
});

it('should return all promises', () => {
    expect(newPromiseAll([promise1, promise2, promise3])).resolves.toStrictEqual([
        'Resolve_first',
        'Resolve_second',
        'Resolve_third',
    ]);
});