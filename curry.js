/**
 * Converts an n-ary function
 *  f :: (t_1, t_2, ..., t_n) -> r
 * To its equivalent curried form
 *  f :: t_1 -> t_2 -> ... -> t_n -> r
 */
const curry = (fn, ...args) => {
    return (...rest) => {
        return fn(...args, ...rest);
    };
};
