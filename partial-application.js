/**
 * Partial Application
 */
const partial = (fn, ...args) => {
    return () => {
        return fn.apply(this, args);
    };
};

export { partial };
