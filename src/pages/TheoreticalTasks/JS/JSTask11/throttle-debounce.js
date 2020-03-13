export function debounce(callback, ms) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(debounceTimer);
        debounceTimer
            = setTimeout(() => callback.apply(context, args), ms)
    }
}

export function throttle(ms, callback) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper(...args) {
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }

        callback.apply(this, args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, ms);
    }
    return wrapper;
}
