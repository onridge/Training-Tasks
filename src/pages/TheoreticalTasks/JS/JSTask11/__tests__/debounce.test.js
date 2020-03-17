import { debounce } from "../throttle-debounce";

describe('debounce', () => {
    beforeAll(() => {
        return jest.useFakeTimers();
    });

    afterAll(() => {
        return jest.useRealTimers();
    });

    const callback = jest.fn();
    const debounceFunc = debounce(callback, 1000);

    it('execute just once', () => {
        expect(callback).toBeCalledTimes(0);
        for (let i = 0; i < 100; i++) {
            debounceFunc();
        }
        jest.runAllTimers();
        expect(callback).toBeCalledTimes(1);
    });


    it('Waits 1 second before start callback', () => {
        expect(callback).toBeCalledTimes(1);
        debounceFunc();
        jest.runOnlyPendingTimers();
        expect(callback).toBeCalledTimes(2);
    });
});
