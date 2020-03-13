export function objectCreate(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

export function newAssign(target, args) {
    if(target == null) {
        return undefined;
    }

    var to = Object(target);
    for(var i = 0; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if(nextSource !== null) {
            for(var nextKey in nextSource) {
                if(Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey]
                }
            }
        }
    }
    return to;
}

export function newPromiseAll (promiseArray) {
    return new Promise((resolve, reject) => {
        const result = [];
        let currentIndex = 0;
        return promiseArray.forEach((promise, index) => {
            promise
                .then((value) => {
                    result[index] = value;
                    currentIndex++;
                    if (currentIndex === promiseArray.length) {
                        return resolve(result);
                    }
                })
                .catch((error) => reject(error));
        });
    });
}

export function newBind(context) {
    var funcToBind = this;
    var argsBind = [].splice().call(arguments, 2);
    return function(){
        var argsFn = [].splice().call(arguments);
        return funcToBind.apply(context, argsBind.concat(argsFn))
    }
}

export function myNew (construct, ...args) {
    const obj = Object.create(construct.prototype)
    construct.apply(obj, args)
    return obj
}