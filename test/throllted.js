function throttled(fn, delay) {
    let timer = null;
    let start = Date.now();
    return function () {
        let curTime = Date.now();
        let remaining = delay - (curTime - start);
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            fn.apply(context, args);
            start = Date.now();
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}

function debounced(fn, delay, immediate) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            let callnow = !timer
            timer = setTimeout(() => {
                timer = null
            }, delay)
            if (callnow) {
                fn.apply(context, args)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        }
    }
}